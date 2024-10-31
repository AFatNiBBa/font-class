
import { Icon } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=thin object-subtract}
 * @preview ![object-subtract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/object-subtract.svg)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 16l96 0 0-16L128 0l0 16zM96 16L96 0 64 0C28.7 0 0 28.7 0 64L0 96l16 0 0-32c0-26.5 21.5-48 48-48l32 0zM0 224l16 0 0-96L0 128l0 96zm0 32l0 32c0 35.3 28.7 64 64 64l32 0 0-16-32 0c-26.5 0-48-21.5-48-48l0-32L0 256zm128 80l0 16 32 0 16 0 48 0 0-16-48 0-16 0-32 0zm48 48l-16 0 0 64c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-64 0 0 16 64 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-64zM352 64c0-35.3-28.7-64-64-64L256 0l0 16 32 0c26.5 0 48 21.5 48 48l0 32 16 0 0-32zm0 112l0-16 0-32-16 0 0 32 0 16 0 48 16 0 0-48zM256 336l0 16 32 0c35.3 0 64-28.7 64-64l0-32-16 0 0 32c0 26.5-21.5 48-48 48l-32 0z" />
    </Icon>
);

export default ObjectSubtract;