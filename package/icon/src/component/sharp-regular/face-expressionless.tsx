
import { Icon } from "../../index";

/**
 * A component that renders the `face-expressionless` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-expressionless?s=sharp-regular face-expressionless}
 * @preview ![face-expressionless](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-expressionless.svg)
 */
const FaceExpressionless: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm160 72l192 0 24 0 0 48-24 0-192 0-24 0 0-48 24 0zM128 192l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32zm176 0l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default FaceExpressionless;