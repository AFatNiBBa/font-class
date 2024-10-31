
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-vertical` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-vertical?s=sharp-light reflect-vertical}
 * @preview ![reflect-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/reflect-vertical.svg)
 */
const ReflectVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 240l16 0 480 0 16 0 0 32-16 0L16 272 0 272l0-32zM233.4 342.6L256 320l22.6 22.6L416 480l0 32-32 0-256 0-32 0 0-32L233.4 342.6zM370.7 480L256 365.3 141.3 480l229.5 0zM256 192l-22.6-22.6L96 32 96 0l32 0L384 0l32 0 0 32L278.6 169.4 256 192zm0-45.3L370.7 32 141.3 32 256 146.7z" />
    </Icon>
);

export default ReflectVertical;