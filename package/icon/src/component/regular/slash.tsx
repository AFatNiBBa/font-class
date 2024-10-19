
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=regular slash}
 * @preview ![slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNS4xIDkuMkMxMy4zLTEuMiAyOC40LTMuMSAzOC44IDUuMWw1OTIgNDY0YzEwLjQgOC4yIDEyLjMgMjMuMyA0LjEgMzMuN3MtMjMuMyAxMi4zLTMzLjcgNC4xTDkuMiA0Mi45Qy0xLjIgMzQuNy0zLjEgMTkuNiA1LjEgOS4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Slash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default Slash;