
import { Icon } from "../../index";

/**
 * A component that renders the `spray-can` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spray-can?s=thin spray-can}
 * @preview ![spray-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/spray-can.svg)
 */
const SprayCan: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 40l0 80 0 8 16 0 0-8 0-80c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 80 0 8 16 0 0-8 0-80c0-22.1-17.9-40-40-40L136 0C113.9 0 96 17.9 96 40zM224 176c44.2 0 80 35.8 80 80l0 192c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-192c0-44.2 35.8-80 80-80l128 0zM96 160c-53 0-96 43-96 96L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-53-43-96-96-96L96 160zM232 336A72 72 0 1 1 88 336a72 72 0 1 1 144 0zm-72-88a88 88 0 1 0 0 176 88 88 0 1 0 0-176zM320 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM512 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM496 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM400 160a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default SprayCan;