
import { Icon } from "../../index";

/**
 * A component that renders the `turtle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=sharp-regular turtle}
 * @preview ![turtle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/turtle.svg)
 */
const Turtle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 240l0-32c0-70.7-57.3-128-128-128S80 137.3 80 208l0 32 256 0zm48 0l0 48-48 0L80 288l-48 0 0-48 0-32c0-97.2 78.8-176 176-176s176 78.8 176 176l0 32zm96 48c-5.5 0-10.9-.7-16-2l0 58 0 24-24 0-88 0 0 64 0 48-48 0-32 0-48 0 0-48 0-64-32 0 0 64 0 48-48 0-32 0-48 0 0-48 0-64-40 0L0 368l0-48 24 0 40 0 48 0 32 0 48 0 32 0 48 0 32 0 48 0 64 0 0-96 0-32 0-80 64 0c53 0 96 43 96 96l0 80-96 0zM272 368l0 64 32 0 0-64-32 0zm-160 0l0 64 32 0 0-64-32 0zM496 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Turtle;