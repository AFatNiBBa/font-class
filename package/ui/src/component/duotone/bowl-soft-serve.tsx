
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-soft-serve` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-soft-serve?s=duotone bowl-soft-serve}
 * @preview ![bowl-soft-serve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bowl-soft-serve.svg)
 */
const BowlSoftServe: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 240c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80c0-41.7-32-76-72.8-79.7c5.6-9.5 8.8-20.5 8.8-32.3C416 57.3 358.7 0 288 0L256 0l10.8 16.3c3.4 5 5.2 11 5.2 17c0 17-13.7 30.7-30.7 30.7L160 64c-35.3 0-64 28.7-64 64c0 11.8 3.2 22.8 8.8 32.3C64 164 32 198.3 32 240z" />
        <path d="M64 320c-8.8 0-16 7.2-16 16l0 8c0 57.4 46.6 104 104 104l30.1 0-20.4 40.8c-1.1 2.3-1.7 4.7-1.7 7.2c0 2.9 .8 5.8 2.4 8.4c2.9 4.7 8.1 7.6 13.6 7.6l160 0c5.5 0 10.7-2.9 13.6-7.6c1.6-2.6 2.4-5.5 2.4-8.4c0-2.4-.6-4.9-1.7-7.2L329.9 448l30.1 0c57.4 0 104-46.6 104-104l0-8c0-8.8-7.2-16-16-16L64 320z" />
    </Icon>
);

export default BowlSoftServe;