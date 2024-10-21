
import { Icon } from "../../index";

/**
 * A component that renders the `money-from-bracket` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-from-bracket?s=light money-from-bracket}
 * @preview ![money-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/money-from-bracket.svg)
 */
const MoneyFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 32C53.5 32 32 53.5 32 80l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 80C0 35.8 35.8 0 80 0L560 0c44.2 0 80 35.8 80 80l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-26.5-21.5-48-48-48L80 32zM496 96c8.8 0 16 7.2 16 16l0 344c0 30.9-25.1 56-56 56l-272 0c-30.9 0-56-25.1-56-56l0-344c0-8.8 7.2-16 16-16s16 7.2 16 16l0 272c53 0 96 43 96 96l128 0c0-53 43-96 96-96l0-272c0-8.8 7.2-16 16-16zM224 480c0-35.3-28.7-64-64-64l0 40c0 13.3 10.7 24 24 24l40 0zm232 0c13.3 0 24-10.7 24-24l0-40c-35.3 0-64 28.7-64 64l40 0zM320 208c-47 0-80 31.3-80 64s33 64 80 64s80-31.3 80-64s-33-64-80-64zm112 64c0 55.6-53 96-112 96s-112-40.4-112-96s53-96 112-96s112 40.4 112 96z" />
    </Icon>
);

export default MoneyFromBracket;