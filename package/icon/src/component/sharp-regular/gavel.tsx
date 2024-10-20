
import { Icon } from "../../index";

/**
 * A component that renders the `gavel` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=sharp-regular gavel}
 * @preview ![gavel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gavel.svg)
 */
const Gavel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M271.2 82.7L217.9 136 376 294.1l53.3-53.3L271.2 82.7zM184 169.9l-16 16L134.1 152l17-17 16-16 87.2-87.3 13.6-13.6 17-17 33.9 33.9L305.2 48.7 463.3 206.8l13.5-13.6 33.9 33.9-17 17-13.5 13.6L393 345l-16 16-17 17L326.1 344l16-16L184 169.9zM129.9 478.1L96 512 62.1 478.1 33.9 449.9 0 416l33.9-33.9 76.1-76.1L144 272l31 31 48.4-48.4 33.9 33.9L209 337l31 31-33.9 33.9-76.1 76.1zM172.1 368L144 339.9 67.9 416 96 444.1 172.1 368z" />
    </Icon>
);

export default Gavel;