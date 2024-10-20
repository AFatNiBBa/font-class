
import { Icon } from "../../index";

/**
 * A component that renders the `face-expressionless` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-expressionless?s=sharp-thin face-expressionless}
 * @preview ![face-expressionless](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-expressionless.svg)
 */
const FaceExpressionless: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160 80l192 0 8 0 0 16-8 0-192 0-8 0 0-16 8 0zM128 192l8 0 80 0 8 0 0 16-8 0-80 0-8 0 0-16zm168 0l80 0 8 0 0 16-8 0-80 0-8 0 0-16 8 0z" />
    </Icon>
);

export default FaceExpressionless;