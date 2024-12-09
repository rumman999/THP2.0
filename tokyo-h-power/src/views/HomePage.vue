<template>
    <div>
        <TopBar />
        <HeaderSection />
        <HeroSection />
        <CommitmentSection />
        <CreationsSection />
        <DifferenceSection />
        <DiscoverSection />
        <GallerySection />
        <TestimonialCarousel />
        <FooterSection />
  </div>
</template>

<script>

import HeaderSection from "../components/HeaderSection.vue";
import HeroSection from "../components/HeroSection.vue";
import CommitmentSection from "../components/CommitmentSection.vue";
import CreationsSection from "../components/CreationsSection.vue";
import DifferenceSection from "../components/DifferenceSection.vue";
import DiscoverSection from "../components/DiscoverSection.vue";
import GallerySection from "../components/GallerySection.vue";
import FooterSection from "../components/FooterSection.vue";
import TestimonialCarousel from "../components/TestimonialCarousel.vue";
import TopBar from "../components/TopBar.vue";

export default {
  components: {
    TopBar,
    HeaderSection,
    HeroSection,
    CommitmentSection,
    CreationsSection,
    DifferenceSection,
    DiscoverSection,
    GallerySection,
    TestimonialCarousel,
    FooterSection,
  },
};

</script>