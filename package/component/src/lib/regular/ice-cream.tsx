
import { Icon } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=regular ice-cream}
 * @preview ![ice-cream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ice-cream.svg)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C140.9 0 72.6 63.3 64.8 144.4C28.4 148 0 178.7 0 216c0 39.8 32.2 72 72 72l64.4 0 175.3 0 64.4 0c39.8 0 72-32.2 72-72c0-37.3-28.4-68-64.8-71.6C375.4 63.3 307.1 0 224 0zM112 160c0-61.9 50.1-112 112-112s112 50.1 112 112c0 2.2-.1 4.4-.2 6.6c-.4 6.6 2 13.1 6.5 17.9s10.8 7.5 17.5 7.5l16.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64.4 0-175.3 0L72 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l16.2 0c6.6 0 12.9-2.7 17.5-7.5s6.9-11.3 6.5-17.9c-.1-2.2-.2-4.4-.2-6.6zm88.1 338.1c4.9 8.6 14 13.9 23.9 13.9s19-5.3 23.9-13.9L349.7 320 98.3 320 200.1 498.1z" />
    </Icon>
);

export default IceCream;