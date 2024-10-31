
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signature-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature-slash?s=duotone signature-slash}
 * @preview ![signature-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/signature-slash.svg)
 */
const SignatureSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 392c0 13.3 10.7 24 24 24l40.3 0c-.2-2.8-.3-5.6-.3-8.5L64 368l-40 0c-13.3 0-24 10.7-24 24zm96-56.4l0 71.9c0 40 32.5 72.5 72.5 72.5c26 0 50-13.9 62.9-36.5l13.9-24.3c17.5-30.5 31.9-62.7 43.1-95.9L181.1 238.7l-16.7 5c-40.6 12.2-68.4 49.6-68.4 92zM138.9 83.6c17.7 13.9 35.5 27.8 53.2 41.7C193.5 108.9 207.2 96 224 96c17.7 0 32 14.3 32 32l0 7.8c0 12.8-.5 25.6-1.5 38.3c33.6 26.4 67.3 52.7 100.9 79.1l42.8-12.8-12.3 36.8L440.6 320 544 320c17.7 0 32-14.3 32-32s-14.3-32-32-32l-83.6 0 18-53.9c3.8-11.3 .9-23.8-7.4-32.4s-20.7-11.8-32.2-8.4L316.4 198.1c2.4-20.7 3.6-41.4 3.6-62.3l0-7.8c0-53-43-96-96-96c-37 0-69.1 20.9-85.1 51.6zM160 335.6c0-14.1 9.3-26.6 22.8-30.7l49-14.7c-10.4 33.8-24.5 66.4-42.1 97.2l-13.9 24.3c-1.5 2.6-4.3 4.3-7.4 4.3c-4.7 0-8.5-3.8-8.5-8.5l0-71.9zM283.5 416l122.6 0-60.9-48-39.4 0c-6.7 16.3-14.2 32.3-22.3 48zm218.3-48c20.4 16 40.8 32 61.2 48l53 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-114.2 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default SignatureSlash;