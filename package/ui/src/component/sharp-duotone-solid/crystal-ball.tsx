
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=sharp-duotone-solid crystal-ball}
 * @preview ![crystal-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/crystal-ball.svg)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224c0 71.4 33.4 135 85.4 176l277.2 0c52-41 85.4-104.6 85.4-176C448 100.3 347.7 0 224 0S0 100.3 0 224zm96-96l46.7-17.3L160 64l17.3 46.7L224 128l-46.7 17.3L160 192l-17.3-46.7L96 128zm112 80l70.1-25.9L304 112l25.9 70.1L400 208l-70.1 25.9L304 304l-25.9-70.1L208 208z" />
        <path d="M362.6 400H85.4L0 512H448L362.6 400z" />
    </Icon>
);

export default CrystalBall;