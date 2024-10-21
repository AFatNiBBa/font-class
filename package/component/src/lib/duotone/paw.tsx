
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paw` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paw?s=duotone paw}
 * @preview ![paw](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paw.svg)
 */
const Paw: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208.4c0 13.2 3.8 27.6 11.6 41.1c18.9 32.4 54 47.3 78.5 33.3s29.1-51.7 10.2-84.1s-54-47.3-78.5-33.3C7.5 173.5 0 189.8 0 208.4zm109.5-77.2c14.3 42.9 52.1 69.1 84.4 58.5s46.9-53.9 32.6-96.8S174.4 23.8 142.1 34.3s-46.9 53.9-32.6 96.8zm168-38.3c-14.3 42.9 .3 86.2 32.6 96.8s70.1-15.6 84.4-58.5s-.3-86.2-32.6-96.8S291.8 50 277.5 92.9zM411.6 198.6c-18.9 32.4-14.3 70.1 10.2 84.1s59.7-.9 78.5-33.3c7.8-13.5 11.6-27.8 11.6-41.1c0-18.6-7.5-34.9-21.8-43.1c-24.5-14-59.7 .9-78.5 33.3z" />
        <path d="M69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5z" />
    </Icon>
);

export default Paw;