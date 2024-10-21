
import { Icon } from "../../index";

/**
 * A component that renders the `torii-gate` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=thin torii-gate}
 * @preview ![torii-gate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/torii-gate.svg)
 */
const ToriiGate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 96c0 26.5 21.5 48 48 48l24 0 336 0 24 0c26.5 0 48-21.5 48-48l0-78.8L450.6 35.4c-20.8 8.3-43 12.6-65.4 12.6L126.8 48c-22.4 0-44.6-4.3-65.4-12.6L16 17.2 16 96zm64 64l-16 0C28.7 160 0 131.3 0 96L0 13.4C0 6 6 0 13.4 0c1.7 0 3.4 .3 5 1l49 19.6C86.3 28.1 106.5 32 126.8 32l258.4 0c20.4 0 40.5-3.9 59.4-11.4L493.6 1c1.6-.6 3.3-1 5-1C506 0 512 6 512 13.4L512 96c0 35.3-28.7 64-64 64l-16 0 0 80 72 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-72 0 0 248c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-248-160 0L96 256l0 248c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-248L8 256c-4.4 0-8-3.6-8-8s3.6-8 8-8l72 0 0-80zm336 0l-152 0 0 80 152 0 0-80zm-168 0L96 160l0 80 152 0 0-80z" />
    </Icon>
);

export default ToriiGate;