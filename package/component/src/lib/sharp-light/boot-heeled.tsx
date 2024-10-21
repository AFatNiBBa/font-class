
import { Icon } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=sharp-light boot-heeled}
 * @preview ![boot-heeled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/boot-heeled.svg)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path d="M141 418.8L278.8 480 432 480l16 0 0-60.2L241.7 316.6 224 307.8l0-19.8 0-256-96 0 0 208 0 16-32 0 0-16L96 32 32 32l0 30L55.8 252l.6 5-.9 4.9L32 387l0 29 96 0 6.8 0 6.2 2.8zM128 0l96 0 32 0 0 32 0 256L480 400l0 80 16 0 16 0 0 32-16 0-16 0-32 0-16 0-160 0L160 462.2l0 33.8 0 16-16 0L16 512 0 512l0-16 0-48 0-16 0-16 0-32L24 256 0 64 0 32 0 0 32 0 96 0l32 0zm0 448l-96 0 0 32 96 0 0-32z" />
    </Icon>
);

export default BootHeeled;