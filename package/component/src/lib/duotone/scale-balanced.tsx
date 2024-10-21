
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scale-balanced` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scale-balanced?s=duotone scale-balanced}
 * @preview ![scale-balanced](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scale-balanced.svg)
 */
const ScaleBalanced: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 64c0 17.7 14.3 32 32 32l113.6 0c5.2 25.8 22.9 47.1 46.4 57.3L288 448l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0 192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-294.7c23.5-10.3 41.2-31.6 46.4-57.3L512 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L384 32C369.4 12.6 346.2 0 320 0s-49.4 12.6-64 32L128 32c-17.7 0-32 14.3-32 32z" />
        <path d="M126.8 195.8L199.3 320 54.4 320l72.4-124.2zM.9 337.1C11.7 382 64 416 126.8 416s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L150.9 141.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L7.6 305.1c-5.7 9.8-9.3 21.1-6.7 32.1zM512 195.8L584.4 320l-144.9 0L512 195.8zM386 337.1C396.8 382 449.1 416 512 416s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L536.1 141.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L392.7 305.1c-5.7 9.8-9.3 21.1-6.7 32.1z" />
    </Icon>
);

export default ScaleBalanced;