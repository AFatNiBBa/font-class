
import { Icon } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=sharp-light crystal-ball}
 * @preview ![crystal-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/crystal-ball.svg)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 224c0 49.2-18.5 94-48.9 128l40.7 0c25.3-36.3 40.2-80.4 40.2-128C448 100.3 347.7 0 224 0S0 100.3 0 224c0 47.6 14.8 91.7 40.2 128l40.7 0C50.5 318 32 273.2 32 224C32 118 118 32 224 32s192 86 192 192zM34.9 512l378.1 0 34.9 0-14-32-42-96L56 384 14 480 0 512l34.9 0zm336.1-96l28 64L48.9 480l28-64 294.1 0zM304 144l-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48 0-16zM160 96l-32 0 0 16 0 16-16 0-16 0 0 32 16 0 16 0 0 16 0 16 32 0 0-16 0-16 16 0 16 0 0-32-16 0-16 0 0-16 0-16z" />
    </Icon>
);

export default CrystalBall;