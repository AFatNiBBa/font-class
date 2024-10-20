
import { Icon } from "../../index";

/**
 * A component that renders the `curling-stone` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=thin curling-stone}
 * @preview ![curling-stone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/curling-stone.svg)
 */
const CurlingStone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M192 104c0-30.9 25.1-56 56-56l160 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L248 32c-39.8 0-72 32.2-72 72l0 56-24 0c-30.9 0-56 25.1-56 56l0 9.1C41.7 232.9 0 279.6 0 336l0 32c0 61.9 50.1 112 112 112l352 0c61.9 0 112-50.1 112-112l0-32c0-56.4-41.7-103.1-96-110.9l0-9.1c0-30.9-25.1-56-56-56l-232 0 0-56zM464 224l-352 0 0-8c0-22.1 17.9-40 40-40l32 0 240 0c22.1 0 40 17.9 40 40l0 8zM112 464c-53 0-96-43-96-96l0-8 544 0 0 8c0 53-43 96-96 96l-352 0zM16 344l0-8c0-53 43-96 96-96l352 0c53 0 96 43 96 96l0 8L16 344z" />
    </Icon>
);

export default CurlingStone;