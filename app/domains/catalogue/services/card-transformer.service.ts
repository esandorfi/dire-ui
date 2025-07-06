import type {
  Catalogue,
  Node,
  HeaderQuote,
  PhilosophyStatement,
  MainOffer,
  FormationsList,
  AuthorProfile,
  ModalitesFormations,
  FooterInfo,
  //   PartnersLogos,
  //   CallToAction
} from "../schemas/catalogue.schema";
import type { Formation } from "../schemas/formation.schema";
import type {
  CardCollection,
  HeaderCard,
  PhilosophyCard,
  MainOfferCard,
  FormationCard,
  ProfileCard,
  DetailsCard,
  FooterCard,
} from "../schemas/card.schema";

/**
 * Service to transform AST nodes into card data
 */
export class CardTransformerService {
  /**
   * Transform a catalogue AST into a collection of cards
   * @param catalogue The catalogue AST to transform
   * @returns A collection of cards
   */
  transformCatalogueToCards(catalogue: Catalogue): CardCollection {
    const cards: CardCollection = [];

    // Process each node in the catalogue
    catalogue.children.forEach((node, index) => {
      const transformedCards = this.transformNodeToCards(node, index);
      cards.push(...transformedCards);
    });

    return cards;
  }

  /**
   * Transform a single AST node into one or more cards
   * @param node The AST node to transform
   * @param index The index of the node in the AST
   * @returns An array of cards
   */
  private transformNodeToCards(node: Node, index: number): CardCollection {
    switch (node.type) {
      case "header_quote":
        return [this.transformHeaderQuote(node as HeaderQuote, index)];
      case "philosophy_statement":
        return [
          this.transformPhilosophyStatement(node as PhilosophyStatement, index),
        ];
      case "main_offer":
        return [this.transformMainOffer(node as MainOffer, index)];
      case "formations_list":
        return this.transformFormationsList(node as FormationsList, index);
      case "author_profile":
        return [this.transformAuthorProfile(node as AuthorProfile, index)];
      case "modalites_formations":
        return [
          this.transformModalitesFormations(node as ModalitesFormations, index),
        ];
      case "footer_info":
        return this.transformFooterInfo(node as FooterInfo, index);
      default:
        // For node types we don't explicitly handle, return an empty array
        return [];
    }
  }

  /**
   * Transform a header quote node into a header card
   */
  private transformHeaderQuote(node: HeaderQuote, index: number): HeaderCard {
    return {
      id: `header-${index}`,
      type: "header",
      quote: node.content.quote,
      author: node.content.author,
    };
  }

  /**
   * Transform a philosophy statement node into a philosophy card
   */
  private transformPhilosophyStatement(
    node: PhilosophyStatement,
    index: number,
  ): PhilosophyCard {
    return {
      id: `philosophy-${index}`,
      type: "philosophy",
      statements: node.content,
    };
  }

  /**
   * Transform a main offer node into a main offer card
   */
  private transformMainOffer(node: MainOffer, index: number): MainOfferCard {
    return {
      id: `main-offer-${index}`,
      type: "main_offer",
      title: node.title,
      formationsCount: node.formations_count,
    };
  }

  /**
   * Transform a formations list node into multiple formation cards
   */
  private transformFormationsList(
    node: FormationsList,
    index: number,
  ): FormationCard[] {
    return node.children.map((formation, formationIndex) =>
      this.transformFormation(formation, `${index}-${formationIndex}`),
    );
  }

  /**
   * Transform a formation node into a formation card
   */
  private transformFormation(
    formation: Formation,
    index: string,
  ): FormationCard {
    return {
      id: `formation-${index}`,
      type: "formation",
      category: formation.category,
      formationId: formation.id,
      title: formation.title,
      introduction: formation.introduction,
      objectifs: formation.objectifs.items,
      programSections: formation.programme.sections.map((section) => ({
        title: section.title,
        items: section.items,
      })),
      publicDescription: formation.public?.description,
    };
  }

  /**
   * Transform an author profile node into a profile card
   */
  private transformAuthorProfile(
    node: AuthorProfile,
    index: number,
  ): ProfileCard {
    return {
      id: `profile-${index}`,
      type: "profile",
      content: node.content,
      signature: node.signature,
    };
  }

  /**
   * Transform a modalites formations node into a details card
   */
  private transformModalitesFormations(
    node: ModalitesFormations,
    index: number,
  ): DetailsCard {
    const sections = [
      {
        title: node.details.public.title,
        content: node.details.public.content,
      },
      {
        title: node.details.pedagogie.title,
        content: node.details.pedagogie.content,
      },
      {
        title: node.details.groupe.title,
        content: node.details.groupe.content,
      },
      { title: node.details.duree.title, content: node.details.duree.content },
      {
        title: node.details.session.title,
        content: node.details.session.content,
      },
    ];

    return {
      id: `details-${index}`,
      type: "details",
      title: node.title,
      sections,
    };
  }

  /**
   * Transform footer info, partners logos, and call to action into a footer card
   */
  private transformFooterInfo(node: FooterInfo, index: number): FooterCard[] {
    // Find partners and call to action nodes that might be related
    const footerCard: FooterCard = {
      id: `footer-${index}`,
      type: "footer",
      legalText: node.content.legal_footer,
      website: node.content.website,
    };

    return [footerCard];
  }
}
