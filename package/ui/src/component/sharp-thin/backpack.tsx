
import { Icon } from "../../index";

/**
 * A component that renders the `backpack` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=sharp-thin backpack}
 * @preview ![backpack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/backpack.svg)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 0l8 0L296 0l8 0 0 8 0 72 16 0c70.7 0 128 57.3 128 128l0 288 0 16-16 0-64 0-16 0L96 512l-16 0-64 0L0 512l0-16L0 208C0 137.3 57.3 80 128 80l16 0 0-72 0-8zM96 496l256 0 0-104L96 392l0 104zm272 0l64 0 0-288c0-61.9-50.1-112-112-112L128 96C66.1 96 16 146.1 16 208l0 288 64 0 0-112 0-88 0-8 8 0 272 0 8 0 0 8 0 88 0 112zM288 16L160 16l0 64 128 0 0-64zM136 192l176 0 8 0 0 16-8 0-176 0-8 0 0-16 8 0zM352 376l0-72L96 304l0 72 256 0z" />
    </Icon>
);

export default Backpack;