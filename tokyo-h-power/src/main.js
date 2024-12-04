import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // If you're using a separate router.js file
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "swiper/css"; // Import base Swiper styles
import "swiper/css/navigation"; // Import navigation styles (if using Navigation)
import "swiper/css/pagination"; // Import pagination styles (if using Pagination)

const app = createApp(App);
app.use(router);
app.mount("#app");
