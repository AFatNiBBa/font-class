
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-raised` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-raised?s=sharp-solid blinds-raised}
 * @preview ![blinds-raised](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/blinds-raised.svg)
 */
const BlindsRaised: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L0 0 0 64l16 0L0 128l128 0 0-64 32 0 0 64 352 0L496 64l16 0 0-64L480 0 32 0zM144 512c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 224l352 0-16-64-336 0 0 64-32 0 0-64L16 160 0 224l128 0 0 194.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default BlindsRaised;