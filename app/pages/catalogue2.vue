<template>
  <div class="catalogue-page main-bg">
    <NavigationPrimary />
    <LandingHeroPrimary :formation-cards="formationCards" />

    <div class="section-b">
      <UContainer class="section-lr p-10 relative bg-gray-900 text-white">
        <div class="section-number bg-gray-900">01</div>
        <div class="px-5 sm:px-10">
          <p class="mb-5 text-base/6 sm:text-2xl/6 text-white-600">
            Une expertise
          </p>
          <p class="text-justify">
            Provoquer <strong>l'éloquence</strong> dans la sphère publique,
            c'est conjuguer écoute, efficacité et éthique.<br />
            <strong>La parole est un outil</strong>, l'un des plus simples et
            l'un des plus complexes que nous ayons pour communiquer.<br />
          </p>
        </div>
      </UContainer>

      <UContainer class="section-lr relative bg-gray-900 text-white">
        <div class="px-5 sm:px-10">
          <p class="mb-10 text-base/6 sm:text-2xl/6 text-white-600">
            Les 4 formations
          </p>
          <UPageGrid class="lg:grid-cols-2">
            <UPageCard
              v-for="(card, index) in heroFormationCards"
              :key="index"
              v-bind="card"
              variant="outline"
              :to="`#${card.id}`"
              :ui="{
                footer: 'text-right text-xs absolute right-2 bottom-2',
                body: 'w-full',
                root: 'border-orange-800 px-10',
                container: 'py-6 sm:py-20',
              }"
              spotlight
              spotlight-color="primary"
            >
              <template #title>
                <div class="text-xs font-bold text-orange-800 pb-2">
                  FORMATION

                  <span class="text-xs">
                    {{
                      card.id == "formation-3-0"
                        ? "ACTEURS DU LIVRE"
                        : "COMMUNICATION"
                    }}
                  </span>
                </div>
                <div class="text-2xl/6 sm:text-4xl/8 font-bold text-gray-900">
                  {{ capitalize(card.title) }}
                </div>
              </template>
              <template #footer>
                {{ getNumber(card.id) }}
              </template>
            </UPageCard>
          </UPageGrid>
        </div>
      </UContainer>

      <UContainer class="section-lr p-10 relative bg-gray-900 text-white">
        <div class="px-5 sm:px-10 flex-col">
          <p class="mb-5 text-base/6 sm:text-2xl/6 text-white-600">
            Une méthode
          </p>

          <p class="text-justify pt-5">
            {{ pedagogieSectionContent }}
          </p>

          <div class="flex gap-x-4 pt-15 justify-center w-full items-center">
            <UButton
              label="Prendre un rendez-vous"
              to="/rdv"
              aria-label="rdv"
              class="font-bold rounded-full text-base sm:text-xl bg-orange-800 text-white"
            />
            <UButton
              label="Devis sur demande"
              to="#devis"
              aria-label="devis"
              class="font-bold rounded-full text-base sm:text-xl bg-white text-gray-900"
            />
          </div>
        </div>
      </UContainer>
    </div>

    <div class="section-b">
      <UContainer class="section-lr p-10 relative" />
    </div>
    <div class="section-b">
      <UContainer class="section-lr p-10 relative bg-white section-b-dashed">
        <div class="section-number bg-gray-900 text-white">02</div>
        <div class="px-5 sm:px-10">
          <p class="mb-5 text-base/6 sm:text-2xl/6 font-bold">
            Avec Nathalie Pinot
          </p>

          <p class="text-justify">{{ profileCard?.content }}</p>
        </div>
      </UContainer>

      <UContainer
        class="section-lr section-b-dashed relative px-0 sm:px-0 lg:px-0 bg-white"
      >
        <LandingStatBoxes
          :stats="[
            { value: '20', label: 'Années d\'expérience' },
            { value: '500+', label: 'Participants formés' },
          ]"
        />
      </UContainer>
      <UContainer class="section-lr py-10 relative bg-white">
        <UPageLogos marquee>
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

    <div
      v-for="(formation, idx) in orderedFormationCards"
      :key="formation.id || idx"
    >
      <div class="section-b">
        <UContainer class="section-lr section-b py-10 relative bg-white">
          <div class="section-number bg-black text-white">
            {{ String(idx + 3).padStart(2, "0") }}
          </div>
          <UPageGrid class="lg:grid-cols-2">
            <div class="px-5 sm:px-10">
              <div class="text-xs font-bold text-orange-800 pb-2">
                FORMATION

                <span class="text-xs">
                  {{
                    formation.id == "formation-3-0"
                      ? "ACTEURS DU LIVRE"
                      : "COMMUNICATION"
                  }}
                </span>
              </div>
              <div class="text-2xl/6 sm:text-4xl/8 font-bold text-gray-900">
                {{ capitalize(formation.title) }}
              </div>

              <div class="mb-2 mt-10 text-gray-700 text-justify sm:max-w-sm">
                {{ formation.introduction }}
              </div>

              <div class="sm:max-w-sm">
                <div class="mb-2 mt-10 text-gray-700 text-justify">
                  <div class="text-xs font-bold text-orange-800 uppercase">
                    Durée:
                  </div>
                  <div class="text-gray-700">2 jours (14h) / 3 jours (21h)</div>
                </div>
                <div
                  v-if="formation.publicDescription || publicSectionContent"
                  class="mb-2"
                >
                  <div class="text-xs font-bold text-orange-800 uppercase">
                    Public :
                  </div>
                  <div class="text-gray-700">
                    {{ formation.publicDescription || publicSectionContent }}
                  </div>
                </div>

                <div class="mb-2">
                  <div class="text-xs font-bold text-orange-800 uppercase">
                    Conditions de participation :
                  </div>
                  <div class="text-gray-700">Aucun prérequis</div>
                </div>
                <div>
                  <div class="text-xs font-bold text-orange-800 uppercase">
                    Session :
                  </div>
                  <div class="text-gray-700">En intra entreprise.</div>
                </div>
                <div class="mb-2">
                  <div class="text-xs font-bold text-orange-800 uppercase">
                    Groupe :
                  </div>
                  <div class="text-gray-700">2 à 14 participants</div>
                </div>
              </div>
            </div>
            <div class="pt-5 sm:pt-10">
              <div
                v-if="formation.objectifs && formation.objectifs.length"
                class="mb-2"
              >
                <div class="text-xs font-bold text-orange-800 uppercase">
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
                <div class="text-xs font-bold text-orange-800 uppercase">
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
              </div>
            </div>
          </UPageGrid>
        </UContainer>
        <UContainer class="section-lr p-10 relative" />
      </div>
    </div>

    <div class="section-b">
      <UContainer class="section-lr p-10 relative bg-gray-900 text-white">
        <div class="section-number bg-gray-900">07</div>
        <div class="px-5 sm:px-10">
          <p class="mb-5 text-base/6 sm:text-2xl/6 text-white-600">
            Modalités des formations
          </p>
          <p class="text-justify">
            Chaque session se déroule en intra-entreprise. Elle dure 2 jours
            (14h) ou 3 jours (21h), et se déroule dans les locaux de
            l'entreprise commanditaire. <br />
          </p>

          <div class="flex gap-x-4 pt-10 justify-center w-full items-center">
            <UButton
              label="Devis sur demande"
              to="#devis"
              aria-label="devis"
              class="font-bold rounded-full text-base sm:text-xl bg-white text-gray-900"
            />
            <UButton
              label="Prendre un rendez-vous"
              to="/rdv"
              aria-label="rdv"
              class="font-bold rounded-full text-base sm:text-xl bg-orange-800 text-white"
            />
          </div>
        </div>
      </UContainer>
    </div>
    <div class="section-b">
      <UContainer class="section-lr relative flex justify-end">
        <div class="p-5 sm:p-10 sm:pr-40">
          <p class="uppercase">
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
          dire <span class="text-orange-800">est</span> un art
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
  </div>
</template>

<script setup lang="ts">
import NavigationPrimary from "@/components/landing/NavigationPrimary.vue";
import { onMounted } from "vue";
import { useCatalogue } from "@/domains/catalogue/composables/useCatalogue";
import LandingHeroPrimary from "@/components/landing/LandingHeroPrimary.vue";
import { capitalize } from "@/shared/utils/string";

// Use the catalogue composable
const {
  loadCatalogue,
  formationCards,
  detailsCard,
  getSectionContent,
  profileCard,
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

function getNumber(id: string): string {
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

const pedagogieSectionContent = computed(() => {
  return getSectionContent(detailsCard.value, "la pédagogie :");
});
</script>
