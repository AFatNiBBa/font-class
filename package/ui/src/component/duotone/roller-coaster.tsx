
import { Icon, generic } from "../../index";

/**
 * A component that renders the `roller-coaster` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/roller-coaster?s=duotone roller-coaster}
 * @preview ![roller-coaster](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/roller-coaster.svg)
 */
const RollerCoaster: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M104 113.1c13.7-9.7 30.2-15.8 48-16.9L152 456c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-342.9zm96-7.2c7 3.5 13.5 7.8 19.5 12.9c3 2.6 5.8 5.3 8.4 8.3c1.3 1.5 2.6 3 3.8 4.5c.6 .8 1.2 1.6 1.8 2.4c.6 .8 1.2 1.6 1.7 2.4L248 154.7 248 456c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-350.1zm96 117.9c16 23 32 46.1 48 69.1L344 456c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-232.2zm96 128.2c14.2 11.5 30.5 20.2 48 25.6l0 78.4c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104.1zM488 384l8 0c13.9 0 27.3-2 40-5.6l0 77.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72z" />
        <path d="M158.1 96c-52 0-94.1 42.1-94.1 94.1L64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 190.1C0 102.8 70.8 32 158.1 32c51.8 0 100.3 25.4 129.8 67.9l129 185.7c15 21.5 39.5 34.4 65.7 34.4l13.4 0c44.2 0 80-35.8 80-80c0-32.8-19.7-61-48-73.3l0 97.3c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-103.4c-14.2 1.5-28 5.8-40.7 12.5l-7.3 3.9 0 74.2L357.6 144.2l51.6-27.5C434.7 103.1 463.1 96 492 96l4 0c79.5 0 144 64.5 144 144c0 2.7-.1 5.4-.2 8l.2 0 0 200c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-88.2c-22.9 15.3-50.4 24.2-80 24.2l-13.4 0c-47.2 0-91.4-23.1-118.3-61.9l-129-185.7C217.7 111.1 188.9 96 158.1 96z" />
    </Icon>
);

export default RollerCoaster;