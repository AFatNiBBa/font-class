
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=thin slash}
 * @preview ![slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMS43IDNDNC41LS40IDkuNS0xIDEzIDEuN2w2MjQgNDk2YzMuNSAyLjcgNCA3LjggMS4zIDExLjJzLTcuOCA0LTExLjIgMS4zTDMgMTQuM0MtLjQgMTEuNS0xIDYuNSAxLjcgM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Slash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M1.7 3C4.5-.4 9.5-1 13 1.7l624 496c3.5 2.7 4 7.8 1.3 11.2s-7.8 4-11.2 1.3L3 14.3C-.4 11.5-1 6.5 1.7 3z" />
    </Icon>
);

export default Slash;