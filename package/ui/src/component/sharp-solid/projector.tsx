
import { Icon } from "../../index";

/**
 * A component that renders the `projector` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=sharp-solid projector}
 * @preview ![projector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/projector.svg)
 */
const Projector: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 24l0-24L392 0l0 24 0 80 0 24 48 0 0-24 0-80zM281 39l-17-17L230.1 56l17 17 56 56 17 17L353.9 112 337 95 281 39zM585 73l17-17L568 22.1 551 39 495 95l-17 17L512 145.9l17-17 56-56zm55 119l-128 0c-26.7-20.1-60-32-96-32s-69.3 11.9-96 32L0 192 0 448l64 0 16 64 64 0 16-64 160 0c26.7 20.1 60 32 96 32c24.4 0 47.5-5.5 68.2-15.2L496 512l64 0 16-64 64 0 0-256zM416 224a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM64 320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Projector;