
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-memo` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-memo?s=duotone building-memo}
 * @preview ![building-memo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/building-memo.svg)
 */
const BuildingMemo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 16-8 0c-27.5 0-52.1 12.6-68.2 32.4c-1.2-.3-2.5-.4-3.8-.4l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l16 0 0 64-16 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l16 0 0 168c0 21.3 7.5 40.8 20.1 56L240 512l0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-96 0c-26.5 0-48-21.5-48-48L0 48zm64 64l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 96c-8.8 0-16 7.2-16 16zm0 128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm96-128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
        <path d="M320 160c0-35.3 28.7-64 64-64l192 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-288zm104 48a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM400 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56-208c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0zM464 304c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0z" />
    </Icon>
);

export default BuildingMemo;