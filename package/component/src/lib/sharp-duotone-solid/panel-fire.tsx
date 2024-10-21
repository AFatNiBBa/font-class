
import { Icon, generic } from "../../index";

/**
 * A component that renders the `panel-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/panel-fire?s=sharp-duotone-solid panel-fire}
 * @preview ![panel-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/panel-fire.svg)
 */
const PanelFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l337 0c-30.5-34-49-78.9-49-128.2c0-2.6 .1-5.2 .2-7.8L264 344l0-48 32.8 0c8.4-26.8 22-51 37.2-72L64 224 64 96l320 0 0 72.8c17.1-15.5 33.7-27.8 47-36.1l17-10.6L448 32 0 32zM72 296l48 0 0 48-48 0 0-48zm96 0l48 0 0 48-48 0 0-48z" />
        <path d="M320 352c0-89.6 85.3-165.3 128-192l64 64 32-32c76.8 64 96 133.3 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160zM480 464.2c35.3 0 64-28.7 64-64c0-48-64-96-64-96s-64 48-64 96c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default PanelFire;