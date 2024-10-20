
import { Icon } from "../../index";

/**
 * A component that renders the `face-expressionless` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-expressionless?s=sharp-solid face-expressionless}
 * @preview ![face-expressionless](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-expressionless.svg)
 */
const FaceExpressionless: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 336l192 0 16 0 0 32-16 0-192 0-16 0 0-32 16 0zM128 192l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32zm176 0l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default FaceExpressionless;