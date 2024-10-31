
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-check?s=light person-circle-check}
 * @preview ![person-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-circle-check.svg)
 */
const PersonCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112A56 56 0 1 1 160 0zM128 164l0 156 64 0 0-156c-6-2.6-12.5-4-19.3-4l-25.4 0c-6.8 0-13.3 1.4-19.3 4zm0 188l0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-293.9L46.1 295.5c-4.2 7.8-13.9 10.7-21.7 6.6s-10.7-13.9-6.6-21.7L76.7 170.3c13.9-26 41-42.3 70.6-42.3l25.4 0c29.5 0 56.7 16.3 70.6 42.3l48.7 91.1c-7.5 9.8-14 20.5-19.3 31.8l-48.6-91L224 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144-64 0zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm67.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
    </Icon>
);

export default PersonCircleCheck;