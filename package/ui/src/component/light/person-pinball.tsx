
import { Icon } from "../../index";

/**
 * A component that renders the `person-pinball` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-pinball?s=light person-pinball}
 * @preview ![person-pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-pinball.svg)
 */
const PersonPinball: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M104 56A24 24 0 1 0 56 56a24 24 0 1 0 48 0zM24 56a56 56 0 1 1 112 0A56 56 0 1 1 24 56zm8 168l0 55.7c.2 5.1 2.7 9.7 6.9 12.6L80 320.6l0-140.4c-6.2-2.7-13-4.2-20-4.2c-15.5 0-28 12.5-28 28l0 19.4c0 .2 0 .4 0 .6zm96 168.4l-96-66L32 496c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 280.2c0-.3 0-.7 0-1L0 204c0-33.1 26.9-60 60-60c27.9 0 53.9 14.2 69 37.6L176.7 256l29.7 0 316.4-60.8L481.6 71.5c-1.1-3.3-1.6-6.7-1.6-10.1L480 32c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 160 0 208 0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-384 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96 0-112-15.3 0c-10.9 0-21-5.5-26.9-14.7L112 214.5l0 128.1L146.1 366c8.7 6 13.9 15.8 13.9 26.4L160 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-103.6zM608 178.8L608 32l-96 0 0 29.4 42.6 127.7L608 178.8zM608 384l0-172.6L224 285.2l0 98.8 384 0zM288 304a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default PersonPinball;