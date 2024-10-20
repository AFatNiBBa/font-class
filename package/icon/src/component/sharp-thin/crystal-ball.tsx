
import { Icon } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=sharp-thin crystal-ball}
 * @preview ![crystal-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/crystal-ball.svg)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 224c0 55.9-22 106.6-57.9 144l21.5 0c32.7-38.9 52.4-89.2 52.4-144C448 100.3 347.7 0 224 0S0 100.3 0 224c0 54.8 19.7 105.1 52.4 144l21.5 0C38 330.6 16 279.9 16 224C16 109.1 109.1 16 224 16s208 93.1 208 208zM19 512l410 0 19 0-10.3-16L376 400 72 400 10.3 496 0 512l19 0zm348.2-96l51.4 80L29.3 496l51.4-80 286.5 0zM296 152l-16 0 0 8 0 56-56 0-8 0 0 16 8 0 56 0 0 56 0 8 16 0 0-8 0-56 56 0 8 0 0-16-8 0-56 0 0-56 0-8zM152 104l-16 0 0 8 0 24-24 0-8 0 0 16 8 0 24 0 0 24 0 8 16 0 0-8 0-24 24 0 8 0 0-16-8 0-24 0 0-24 0-8z" />
    </Icon>
);

export default CrystalBall;