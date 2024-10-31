
import { Icon } from "../../index";

/**
 * A component that renders the `van-shuttle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=thin van-shuttle}
 * @preview ![van-shuttle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/van-shuttle.svg)
 */
const VanShuttle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 80l0 112 144 0 0-144L48 48C30.3 48 16 62.3 16 80zm0 128l0 128c0 17.7 14.3 32 32 32l17.3 0c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80l130.7 0c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80l17.3 0c17.7 0 32-14.3 32-32l0-123.2c0-1.6-.2-3.2-.5-4.8L376 208l-208 0L16 208zm160-16l192 0 0-144L176 48l0 144zm208 0l229.4 0L483.7 55.5c-4.5-4.8-10.8-7.5-17.4-7.5L384 48l0 144zM592 384l-16 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96l-16 0c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l120 0 208 0 90.3 0c11 0 21.4 4.5 29 12.4L629 185.2c7.1 7.4 11 17.3 11 27.6L640 336c0 26.5-21.5 48-48 48zm-32 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM160 464a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
    </Icon>
);

export default VanShuttle;