
import { Icon } from "../../index";

/**
 * A component that renders the `backpack` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=thin backpack}
 * @preview ![backpack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/backpack.svg)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M184 16l80 0c13.3 0 24 10.7 24 24l0 40L160 80l0-40c0-13.3 10.7-24 24-24zM144 40l0 40-16 0C57.3 80 0 137.3 0 208L0 448c0 35.3 28.7 64 64 64l24 0 272 0 24 0c35.3 0 64-28.7 64-64l0-240c0-70.7-57.3-128-128-128l-16 0 0-40c0-22.1-17.9-40-40-40L184 0c-22.1 0-40 17.9-40 40zM368 496l0-112 0-40c0-30.9-25.1-56-56-56l-176 0c-30.9 0-56 25.1-56 56l0 40 0 112-16 0c-26.5 0-48-21.5-48-48l0-240C16 146.1 66.1 96 128 96l192 0c61.9 0 112 50.1 112 112l0 240c0 26.5-21.5 48-48 48l-16 0zM96 496l0-104 256 0 0 104L96 496zm40-304c-4.4 0-8 3.6-8 8s3.6 8 8 8l176 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-176 0zM352 376L96 376l0-32c0-22.1 17.9-40 40-40l176 0c22.1 0 40 17.9 40 40l0 32z" />
    </Icon>
);

export default Backpack;