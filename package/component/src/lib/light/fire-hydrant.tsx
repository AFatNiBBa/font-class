
import { Icon } from "../../index";

/**
 * A component that renders the `fire-hydrant` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-hydrant?s=light fire-hydrant}
 * @preview ![fire-hydrant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/fire-hydrant.svg)
 */
const FireHydrant: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c8.8 0 16 7.2 16 16l0 17c57.9 7.2 103.8 53.1 111 111l17 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L48 176c-8.8 0-16-7.2-16-16s7.2-16 16-16l17 0C72.2 86.1 118.1 40.2 176 33l0-17c0-8.8 7.2-16 16-16zm0 64c-47.6 0-87.1 34.6-94.7 80l189.3 0c-7.6-45.4-47.1-80-94.7-80zM32 496c0-8.8 7.2-16 16-16l16 0 0-80-16 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l16 0 0-32 32 0 0 48 0 128 0 96 192 0 0-96 0-128 0-48 32 0 0 32 16 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-16 0 0 80 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0L80 512l-32 0c-8.8 0-16-7.2-16-16zM320 368l16 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96zM64 368l0-96-16 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l16 0zm160-48a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default FireHydrant;