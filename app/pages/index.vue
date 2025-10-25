<template>
  <div class="catalogue-page main-bg">
    <NavigationPrimary />

    <div class="section-b waves-bg">
      <LandingHeroPrimary :formation-cards="formationCards" />
    </div>

    <a name="nathalie-pinot" />
    <div class="section-b">
      <UContainer
        class="section-lr p-5 sm:p-10 relative section-b-dashed np-bg"
      >
        <div class="sm:px-10">
          <p class="text-lg font-bold uppercase pb-10">
            PROVOQUER L'ÉLOQUENCE, C'EST CONJUGUER EFFICACITÉ, ENGAGEMENT ET
            ÉTHIQUE.
          </p>

          <p class="mb-5 text-xl/6 sm:text-2xl/6 font-bold">Nathalie Pinot</p>

          <p class="text-justify sm:max-w-3xl">
            <i>« Les mots ont de la voix. »</i> Cela fait plus de 20 ans que
            Nathalie Pinot exerce son métier de formatrice et de coach dans le
            domaine de la communication. L'art de la scène insuffle à sa
            pédagogie un ton ludique et pertinent auprès de tous les publics.
            Elle continue d'enseigner les techniques de l'éloquence à
            l'Université d'Avignon et des Pays du Vaucluse. Originaire de
            Franche-Comté, elle bifurque à Arles en 2000, se spécialise en
            danse-thérapie, devient lectrice publique et codirige la Compagnie
            Autrement Dit. Elle est installée aujourd'hui à Saint-Maixent
            L'École et se déplace au gré des formations.
          </p>
        </div>
      </UContainer>

      <UContainer
        class="section-lr section-b-dashed relative px-0 sm:px-0 lg:px-0"
      >
        <LandingStatBoxes
          :stats="[
            { value: '20', label: 'Années d\'expérience' },
            { value: '3 000+', label: 'Participants formés' },
          ]"
        />
      </UContainer>

      <UContainer class="section-lr section-b-dashed p-5 sm:p-10 relative">
        <div class="sm:p-10">
          <UPageGrid class="lg:grid-cols-2">
            <UPageCard
              v-for="(card, index) in heroFormationCards"
              :key="index"
              v-bind="card"
              variant="outline"
              :to="`#card-${card.id}`"
              :ui="{
                footer: 'text-xs absolute right-0 bottom-5',
                body: 'w-full',
                root: 'border-orange-500 border-2 rounded-lg sm:px-10',
                container: 'py-6 sm:py-20',
              }"
              spotlight
              spotlight-color="primary"
            >
              <template #title>
                <div class="text-xs font-bold text-orange-500 pb-2 sm:pb-5">
                  FORMATION
                </div>
                <div
                  class="text-2xl/6 sm:text-4xl/8 font-bold text-gray-900 uppercase"
                >
                  {{ capitalize(card.title) }}
                </div>
              </template>
            </UPageCard>
          </UPageGrid>

          <div
            class="flex gap-x-4 pt-5 sm:pt-20 justify-center w-full items-center"
          >
            <UButton
              label="Organisez votre formation"
              to="#rdv"
              aria-label="rdv"
              class="font-bold rounded-full text-base sm:text-xl bg-orange-500 text-white"
            />
          </div>
        </div>
      </UContainer>

      <UContainer class="section-lr relative bg-white pb-5">
        <UPageLogos marquee class="bg-white">
          <ULink to="https://bibliotheques.avignon.fr/">
            <NuxtImg
              src="/images/logo-resized/avignon-bibliotheques.jpg"
              alt="Avignon Bibliotheques"
              class="color-bw-over-color"
            />
          </ULink>
          <ULink to="https://www.mediatheque-portdebouc.com/">
            <NuxtImg
              src="/images/logo-resized/mediatheque-port-de-bouc.png"
              alt="Mediatheque Port de Bouc"
              class="color-bw-over-color"
            />
          </ULink>
          <ULink to="https://angladon.com/">
            <NuxtImg
              src="/images/logo-resized/musee-angladon.jpg"
              alt="Musée Angladon"
              class="color-bw-over-color"
            />
          </ULink>
          <ULink to="https://www.poesieavignon.eu/">
            <NuxtImg
              src="/images/logo-resized/centre-europeen-de-poesie-avignon.jpg"
              alt="Maison de la poésie d'Avignon"
              class="color-bw-over-color"
            />
          </ULink>
          <ULink to="https://www.festivaloffavignon.com/">
            <NuxtImg
              src="/images/logo-resized/festival-avignon-off.png"
              alt="Festival Avignon Off"
              class="color-bw-over-color"
            />
          </ULink>
          <ULink to="https://www.education.gouv.fr/">
            <NuxtImg
              src="/images/logo-resized/education-nationale.png"
              alt="Education Nationale"
              class="color-bw-over-color"
            />
          </ULink>
          <ULink to="https://univ-avignon.fr/">
            <NuxtImg
              src="/images/logo-resized/universite-avignon.png"
              alt="Unversité d'Avignon et des Pays du Vaucluse"
              class="color-bw-over-color"
            />
          </ULink>
          <ULink to="https://www.cnfpt.fr/">
            <NuxtImg
              src="/images/logo-resized/cnfpt.png"
              alt="CNFPT | Centre National de la Fonction Publique Territoriale"
              class="color-bw-over-color"
            />
          </ULink>
        </UPageLogos>
      </UContainer>
    </div>

    <div class="section-b">
      <UContainer class="section-lr p-10 relative" />
    </div>
    <a name="formations" />
    <div
      v-for="(formation, idx) in orderedFormationCards"
      :key="formation.id || idx"
    >
      <div class="section-b">
        <a :name="`card-${formation.id}`" />
        <UContainer
          class="section-lr section-b py-10 relative bg-orange-200/10"
        >
          <div class="section-number bg-orange-200/10 text-gray-800">
            {{ String(idx + 1).padStart(2, "0") }}
          </div>
          <UPageGrid class="lg:grid-cols-2">
            <div class="sm:px-10">
              <div class="text-xs font-bold text-orange-500 pb-2">
                FORMATION
              </div>
              <div
                class="text-2xl/6 sm:text-4xl/8 font-bold text-gray-900 uppercase"
              >
                {{ capitalize(formation.title) }}
              </div>

              <div class="mb-2 mt-10 text-gray-700 text-justify sm:max-w-sm">
                {{ formation.introduction }}
              </div>

              <div class="sm:max-w-sm">
                <div class="mb-2 mt-10 text-gray-700 text-justify">
                  <div class="text-xs font-bold text-orange-500 uppercase">
                    Durée:
                  </div>
                  <div class="text-gray-700">2 jours (14h) / 3 jours (21h)</div>
                </div>
                <div
                  v-if="formation.publicDescription || publicSectionContent"
                  class="mb-2"
                >
                  <div class="text-xs font-bold text-orange-500 uppercase">
                    Public :
                  </div>
                  <div class="text-gray-700">
                    {{ formation.publicDescription || publicSectionContent }}
                  </div>
                </div>

                <div class="mb-2">
                  <div class="text-xs font-bold text-orange-500 uppercase">
                    Conditions de participation :
                  </div>
                  <div class="text-gray-700">Aucun prérequis</div>
                </div>
                <div>
                  <div class="text-xs font-bold text-orange-500 uppercase">
                    Session :
                  </div>
                  <div class="text-gray-700">En intra entreprise.</div>
                </div>
                <div class="mb-2">
                  <div class="text-xs font-bold text-orange-500 uppercase">
                    Groupe :
                  </div>
                  <div class="text-gray-700">2 à 14 participants</div>
                </div>
              </div>
            </div>
            <div class="sm:pt-10">
              <div
                v-if="formation.objectifs && formation.objectifs.length"
                class="mb-2"
              >
                <div class="text-xs font-bold text-orange-500 uppercase">
                  Objectifs :
                </div>
                <ul class="list-disc ml-6">
                  <li v-for="(obj, oidx) in formation.objectifs" :key="oidx">
                    {{ obj }}
                  </li>
                </ul>
              </div>

              <div
                v-if="
                  formation.programSections && formation.programSections.length
                "
                class="mb-2"
              >
                <div class="text-xs font-bold text-orange-500 uppercase">
                  Programme :
                </div>
                <div
                  v-for="(section, sidx) in formation.programSections"
                  :key="sidx"
                  class="mb-2"
                >
                  <div class="font-semibold">{{ section.title }}</div>
                  <ul class="list-decimal ml-6">
                    <li v-for="(item, iidx) in section.items" :key="iidx">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <UButton
                  label="Devis sur demande"
                  to="#rdv"
                  aria-label="devis"
                  class="font-bold rounded-full text-lg mt-5"
                />
              </div>
            </div>
          </UPageGrid>
        </UContainer>
        <UContainer class="section-lr p-10 relative" />
      </div>
    </div>

    <div class="section-b">
      <a name="modalites" />
      <UContainer
        class="section-lr p-5 sm:p-10 relative bg-orange-200/40 text-gray-900"
      >
        <div class="sm:px-10">
          <p class="mb-5 text-lg/6 sm:text-2xl/6 font-bold">
            Modalités des formations
          </p>
          <p class="text-justify mb-2">
            <strong class="text-sm">PUBLIC :</strong> Pour toute personne
            intervenant dans le champs de l'expression, de la communication et
            du management.
          </p>
          <p class="text-justify mb-2">
            <strong class="text-sm">SECTEUR :</strong> Les acteurs du livre, les
            entreprises, les grandes écoles, les collectivités territoriales...
          </p>

          <p class="text-justify mb-2">
            <strong class="text-sm">GROUPES :</strong> de 2 à 14 participants
          </p>
          <p class="text-justify mb-2">
            <strong class="text-sm">DUREE :</strong> de 2 à 3 jours
          </p>

          <p class="text-justify mb-2">
            <strong class="text-sm">LA PÉDAGOGIE :</strong> La formation se
            construit dans la réflexion, l'écoute et la pratique alternant
            apports théoriques et mises en situation. Chaque journée se déroule
            avec un training corporel et vocal, des études de cas, des exercices
            liés à la pratique théâtrale et à celle de l'écriture, en intégrant
            les différents outils de communication.
          </p>
          <p class="text-justify mb-2">
            <strong class="text-sm">MODALITÉS D'ÉVALUATION :</strong> Les acquis
            théoriques et pratiques feront l'objet d'un processus d'évaluation
            continue durant tout le déroulé de la formation. Un regard attentif
            est porté sur l'engagement de chacun tout au long de la session. Un
            bilan pédagogique sera réalisé le dernier jour avec l'ensemble des
            participants et l'intervenante.
          </p>
          <p class="text-justify mb-2">
            <strong class="text-sm">SESSION :</strong> En intra entreprise. La
            formation choisie est accueillie par la structure commanditaire et
            s'organise selon ses souhaits.
          </p>
          <p class="text-justify mb-2">
            <strong class="text-sm">DEVIS :</strong> Sur demande
          </p>
          <p class="text-justify mb-2">
            <strong class="text-sm">DEPLACEMENTS :</strong> A partir de
            Saint-Maixent L'Ecole (79400)
          </p>
        </div>
      </UContainer>
    </div>

    <div class="section-b">
      <a name="rdv" />
      <UContainer
        class="section-lr p-5 sm:p-10 relative bg-orange-200/60 text-gray-900"
      >
        <div class="sm:px-10">
          <div class="flex-col sm:flex-row mb-5">
            <p class="text-lg/6 sm:text-2xl/6 font-bold">
              Contactez-nous par internet / par tél 06.63.96.39.10
            </p>
          </div>
          <DemandeRdvForm />
        </div>
      </UContainer>
    </div>

    <div class="section-b">
      <UContainer class="section-lr relative flex justify-end">
        <div class="p-5 sm:p-10 sm:pr-40">
          <p class="uppercase font-bold text-orange-500">
            COMME LES LETTRES DANS<br />
            LES MOTS NOUS SOMMES<br />
            DES PETITES PARTS D'UNE<br />PHRASE QUI NE FINIT PAS.
          </p>
          <p>Henri Meschonnic</p>
        </div>
      </UContainer>
    </div>

    <UFooter>
      <template #left>
        <div class="text-lg sm:text-2xl">
          dire <span class="text-orange-500">est</span> un art
        </div>
      </template>

      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>

      <template #right>
        <UButton
          icon="i-simple-icons-linkedin"
          color="neutral"
          variant="ghost"
          to="https://www.linkedin.com/in/nathalie-pinot-dire-estunart"
          target="_blank"
          aria-label="LinkedIn"
        />
      </template>
    </UFooter>

    <p class="text-muted text-sm text-center w-full p-5">
      NATHALIE PINOT - DIRE EST UN ART, 54 RUE DE LA GRANGE AUX MOINES, 79400 ST
      MAIXENT L'ECOLE<br />
      SIRET: 90126767400025, APE : 8559B, ORGANISME DE FORMATION - DA
      n°75790151879 - TEL : 06.63.96.39.10
    </p>
  </div>
</template>

<script setup lang="ts">
import NavigationPrimary from "@/components/landing/NavigationPrimary.vue";
import DemandeRdvForm from "@/components/landing/DemandeRdvForm.vue";
import { onMounted } from "vue";
import { useCatalogue } from "@/domains/catalogue/composables/useCatalogue";
import LandingHeroPrimary from "@/components/landing/LandingHeroPrimary.vue";
import { capitalize } from "@/shared/utils/string";

useHead({
  title: "Dire est un art - Nathalie Pinot",
  meta: [
    {
      name: "description",
      content:
        "Comment développer ses atouts pour mieux communiquer ? Retrouver les formations proposées par Nathalie Pinot.",
    },
    {
      name: "keywords",
      content:
        "communication, formation, Nathalie Pinot, formation communication, formation intra entreprise",
    },
  ],
});

// Use the catalogue composable
const {
  loadCatalogue,
  formationCards,
  detailsCard,
  getSectionContent,
  profileCard: _profileCard,
} = useCatalogue();

onMounted(() => {
  loadCatalogue();
});

const desiredOrder = [
  "formation-3-2",
  "formation-3-3",
  "formation-3-1",
  "formation-3-0",
];

const heroOrder = [
  "formation-3-2",
  "formation-3-3",
  "formation-3-0",
  "formation-3-1",
];

const heroFormationCards = computed(() =>
  formationCards.value
    .slice()
    .sort((a, b) => heroOrder.indexOf(a.id) - heroOrder.indexOf(b.id)),
);

function _getNumber(id: string): string {
  const customMap: Record<string, number> = {
    "formation-3-2": 1,
    "formation-3-3": 2,
    "formation-3-1": 3,
    "formation-3-4": 4,
  };
  if (customMap[id]) return String(customMap[id]).padStart(2, "0");

  const last = id.split("-").pop();
  const num = Number(last);
  if (isNaN(num)) return "";
  return String(num + 1).padStart(2, "0");
}

const orderedFormationCards = computed(() =>
  formationCards.value
    .slice()
    .sort((a, b) => desiredOrder.indexOf(a.id) - desiredOrder.indexOf(b.id)),
);

const publicSectionContent = computed(() => {
  return getSectionContent(detailsCard.value, "public :");
});

const _pedagogieSectionContent = computed(() => {
  return getSectionContent(detailsCard.value, "la pédagogie :");
});
</script>
