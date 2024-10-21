
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crow?s=duotone crow}
 * @preview ![crow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/crow.svg)
 */
const Crow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M259.2 384l51.9 0 39.1 94.9c5 12.3-.8 26.3-13.1 31.3c-3 1.2-6.1 1.8-9.1 1.8c-9.4 0-18.4-5.6-22.2-14.9L259.2 384zm96 0c16.9-.3 33.4-2.8 49-7.1l42 102c5 12.3-.8 26.3-13.1 31.3c-3 1.2-6.1 1.8-9.1 1.8c-9.4 0-18.4-5.6-22.2-14.9L355.2 384zM523.9 32L574 32c29.4 0 55 20 62.1 48.5L640 96l-96 24 0-32c0-21.3-7.5-40.8-20.1-56z" />
        <path d="M456 0c-48.6 0-88 39.4-88 88l0 29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384 352 384c106 0 192-86 192-192l0-64 0-40c0-48.6-39.4-88-88-88zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Crow;