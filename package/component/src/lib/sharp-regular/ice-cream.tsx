
import { Icon } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=sharp-regular ice-cream}
 * @preview ![ice-cream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ice-cream.svg)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C140.9 0 72.6 63.3 64.8 144.4C28.4 148 0 178.7 0 216l0 48 0 24 24 0 40 0 72.4 0 175.3 0 72.4 0 40 0 24 0 0-24 0-48c0-37.3-28.4-68-64.8-71.6C375.4 63.3 307.1 0 224 0zM112 160c0-61.9 50.1-112 112-112s112 50.1 112 112c0 2.2-.1 4.4-.2 6.6L334.3 192l25.4 0 16.2 0c13.3 0 24 10.7 24 24l0 24-16 0-72.4 0-175.3 0L64 240l-16 0 0-24c0-13.3 10.7-24 24-24l16.2 0 25.4 0-1.5-25.4c-.1-2.2-.2-4.4-.2-6.6zM224 512L347.4 320l-246.9 0L224 512z" />
    </Icon>
);

export default IceCream;