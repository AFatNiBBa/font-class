
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-field` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-field?s=duotone pen-field}
 * @preview ![pen-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-field.svg)
 */
const PenField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208c0-44.2 35.8-80 80-80l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 192c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16l416 0c8.8 0 16-7.2 16-16l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 208z" />
        <path d="M534.1 16L494.4 55.7l89.3 89.3 39.8-38.9c19.1-18.7 19.2-49.4 .4-68.2L601.9 16c-18.8-18.8-49.2-18.7-67.9 0zM471.7 78.4L328.5 221.8c-7 7-12.3 15.6-15.4 25l-23.8 71.3c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l71.5-23.9c9.2-3.1 17.6-8.2 24.5-15L560.8 167.5 471.7 78.4zM160 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default PenField;