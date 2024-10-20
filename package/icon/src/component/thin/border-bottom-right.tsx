
import { Icon } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=thin border-bottom-right}
 * @preview ![border-bottom-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/border-bottom-right.svg)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 368c0 22.1-17.9 40-40 40L24 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l368 0c30.9 0 56-25.1 56-56l0-368zM320 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM128 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm96-32a16 16 0 1 0 0 32 16 16 0 1 0 0-32zM32 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" />
    </Icon>
);

export default BorderBottomRight;