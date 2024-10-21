
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clouds-sun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds-sun?s=sharp-duotone-solid clouds-sun}
 * @preview ![clouds-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clouds-sun.svg)
 */
const CloudsSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 121.3L60.7 208 0 294.7 104 312l17.3 104 42-29.4c8.8-37.6 34.2-68.7 68-85.4c-7.5 1.9-15.3 2.9-23.4 2.9c-53 0-96-43-96-96s43-96 96-96c36.6 0 68.5 20.5 84.7 50.7c7.5-23.3 23.7-42.8 44.7-54.5L312 104 294.7 0 208 60.7 121.3 0 104 104 0 121.3zM144 208a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M495.9 224c-12.9 0-25.3 2.2-36.8 6.2C435.9 206.6 403.7 192 368 192c-16.7 0-32.6 3.2-47.3 9c-.4-2.9-.6-5.9-.6-8.9c0-35.3 28.6-64 64-64c7.4 0 14.6 1.3 21.2 3.6c11.5-30.1 40.6-51.6 74.8-51.6c38.9 0 71.3 27.8 78.5 64.6c3.1-.4 6.3-.6 9.5-.6c39.8 0 72 32.2 72 72l0 72-42.8 0c-18-37.9-56.5-64.1-101.3-64.1zm144 287.9l-80 0-271.9 0-96 0 0-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7l0 80z" />
    </Icon>
);

export default CloudsSun;