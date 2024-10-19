
import { Icon } from "../../index";

/**
 * A component that renders the `coin-front` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-front?s=sharp-light coin-front}
 * @preview ![coin-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyYTIyNCAyMjQgMCAxIDEgMCA0NDggMjI0IDIyNCAwIDEgMSAwLTQ0OHptMCA0ODBBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem0wLTQxNmExNjAgMTYwIDAgMSAxIDAgMzIwIDE2MCAxNjAgMCAxIDEgMC0zMjB6bTAgMzUyYTE5MiAxOTIgMCAxIDAgMC0zODQgMTkyIDE5MiAwIDEgMCAwIDM4NHptMTYtMjcybDAtMTYtMzIgMCAwIDE2IDAgMTYwIDAgMTYgMzIgMCAwLTE2IDAtMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CoinFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-416a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 352a192 192 0 1 0 0-384 192 192 0 1 0 0 384zm16-272l0-16-32 0 0 16 0 160 0 16 32 0 0-16 0-160z" />
    </Icon>
);

export default CoinFront;