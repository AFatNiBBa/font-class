
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-expressionless` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-expressionless?s=sharp-duotone-solid face-expressionless}
 * @preview ![face-expressionless](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-expressionless.svg)
 */
const FaceExpressionless: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-64l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32zm16 144l16 0 192 0 16 0 0 32-16 0-192 0-16 0 0-32zM288 192l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32z" />
        <path d="M144 192l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zm160 0l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0z" />
    </Icon>
);

export default FaceExpressionless;