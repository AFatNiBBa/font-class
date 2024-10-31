
import { Icon } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=sharp-solid crystal-ball}
 * @preview ![crystal-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/crystal-ball.svg)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 224c0 62.7-25.7 119.3-67.2 160L67.2 384C25.7 343.3 0 286.7 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM177.3 110.7L160 64l-17.3 46.7L96 128l46.7 17.3L160 192l17.3-46.7L224 128l-46.7-17.3zM304 112l-25.9 70.1L208 208l70.1 25.9L304 304l25.9-70.1L400 208l-70.1-25.9L304 112zM0 512l64-96 320 0 64 96L0 512z" />
    </Icon>
);

export default CrystalBall;