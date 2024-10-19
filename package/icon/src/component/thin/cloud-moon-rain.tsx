
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-moon-rain` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-moon-rain?s=thin cloud-moon-rain}
 * @preview ![cloud-moon-rain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzQ1LjUgMTA0YzE3LjYtNDkuOSA2NS42LTg1LjcgMTIyLjEtODUuN2MzLjcgMCA3LjQgLjIgMTEgLjVjLTM2LjIgMjAuMy02MC43IDU4LjgtNjAuNyAxMDNjMCA2NS4zIDUzLjQgMTE4LjIgMTE5LjQgMTE4LjJjNyAwIDEzLjgtLjYgMjAuNS0xLjdjLTIxLjQgMjAuNi01MC4xIDM0LTgxLjkgMzUuOWMxLjQgNS4xIDIuNSAxMC40IDMuMiAxNS44YzM0LjgtMi43IDY2LjItMTcuNSA4OS44LTQwLjJjNS4xLTQuOSA2LjQtMTIuNSAzLjItMTguN3MtMTAuMS05LjctMTctOC42Yy01LjggMS0xMS43IDEuNS0xNy44IDEuNWMtNTcuMiAwLTEwMy40LTQ1LjktMTAzLjQtMTAyLjJjMC0zOC4xIDIxLjEtNzEuNCA1Mi41LTg5YzYuMS0zLjQgOS4zLTEwLjUgNy44LTE3LjRzLTcuMy0xMi0xNC4zLTEyLjZjLTQuMS0uMy04LjItLjUtMTIuMy0uNUM0MDQuMSAyLjMgMzUwIDQyLjcgMzMwLjMgOTkuMWM1LjIgMS4zIDEwLjMgMi45IDE1LjMgNC45ek05Mi4yIDQxNy4yYy0zLjgtMi4zLTguNy0xLTExIDIuN2wtNDggODBjLTIuMyAzLjgtMSA4LjcgMi43IDExczguNyAxIDExLTIuN2w0OC04MGMyLjMtMy44IDEtOC43LTIuNy0xMXptOTYgMGMtMy44LTIuMy04LjctMS0xMSAyLjdsLTQ4IDgwYy0yLjMgMy44LTEgOC43IDIuNyAxMXM4LjcgMSAxMS0yLjdsNDgtODBjMi4zLTMuOCAxLTguNy0yLjctMTF6bTk2IDBjLTMuOC0yLjMtOC43LTEtMTEgMi43bC00OCA4MGMtMi4zIDMuOC0xIDguNyAyLjcgMTFzOC43IDEgMTEtMi43bDQ4LTgwYzIuMy0zLjggMS04LjctMi43LTExem05NiAwYy0zLjgtMi4zLTguNy0xLTExIDIuN2wtNDggODBjLTIuMyAzLjgtMSA4LjcgMi43IDExczguNyAxIDExLTIuN2w0OC04MGMyLjMtMy44IDEtOC43LTIuNy0xMXpNOTYgMTkyYzAtNDQuMiAzNS44LTgwIDgwLTgwYzMyIDAgNTkuNiAxOC44IDcyLjQgNDZjMS4xIDIuMyAzLjIgMy45IDUuNyA0LjRzNS4xLS4yIDYuOS0xLjljMTEuNC0xMC4zIDI2LjQtMTYuNSA0Mi45LTE2LjVjMzUuMyAwIDY0IDI4LjcgNjQgNjRjMCA3LjUtMS4zIDE0LjctMy43IDIxLjRjLS44IDIuNC0uNSA1IC45IDcuMXMzLjcgMy40IDYuMiAzLjVjMzMuNyAxLjggNjAuNSAyOS43IDYwLjUgNjMuOWMwIDM1LjMtMjguNyA2NC02NCA2NGMtLjcgMC0xLjUgMC0yLjIgMGMwIDAgMCAwIDAgMGwtLjMgMEw5OSAzNjcuOXMwIDAgMCAwbC0uMyAwYy0uOSAwLTEuOCAwLTIuOCAwYy00NC4yIDAtODAtMzUuOC04MC04MGMwLTQxLjggMzIuMS03Ni4yIDczLjEtNzkuN2MyLjEtLjIgNC4xLTEuMiA1LjUtMi44czItMy44IDEuOC01LjljLS4yLTIuNS0uNC01LS40LTcuNnptODAtOTZjLTUzIDAtOTYgNDMtOTYgOTZsMCAxLjNDMzQuNiAyMDAuOSAwIDI0MC40IDAgMjg4YzAgNTMgNDMgOTYgOTYgOTZjMS4xIDAgMi4xIDAgMy4yLS4xbDI2Ni4xIDBjLjkgMCAxLjggMCAyLjYgMGM0NC4yIDAgODAtMzUuOCA4MC04MGMwLTM5LjMtMjguNC03Mi4xLTY1LjgtNzguN2MxLjItNS42IDEuOS0xMS4zIDEuOS0xNy4yYzAtNDQuMi0zNS44LTgwLTgwLTgwYy0xNyAwLTMyLjggNS4zLTQ1LjggMTQuNEMyNDEuNCAxMTQuNiAyMTAuOCA5NiAxNzYgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CloudMoonRain: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M345.5 104c17.6-49.9 65.6-85.7 122.1-85.7c3.7 0 7.4 .2 11 .5c-36.2 20.3-60.7 58.8-60.7 103c0 65.3 53.4 118.2 119.4 118.2c7 0 13.8-.6 20.5-1.7c-21.4 20.6-50.1 34-81.9 35.9c1.4 5.1 2.5 10.4 3.2 15.8c34.8-2.7 66.2-17.5 89.8-40.2c5.1-4.9 6.4-12.5 3.2-18.7s-10.1-9.7-17-8.6c-5.8 1-11.7 1.5-17.8 1.5c-57.2 0-103.4-45.9-103.4-102.2c0-38.1 21.1-71.4 52.5-89c6.1-3.4 9.3-10.5 7.8-17.4s-7.3-12-14.3-12.6c-4.1-.3-8.2-.5-12.3-.5C404.1 2.3 350 42.7 330.3 99.1c5.2 1.3 10.3 2.9 15.3 4.9zM92.2 417.2c-3.8-2.3-8.7-1-11 2.7l-48 80c-2.3 3.8-1 8.7 2.7 11s8.7 1 11-2.7l48-80c2.3-3.8 1-8.7-2.7-11zm96 0c-3.8-2.3-8.7-1-11 2.7l-48 80c-2.3 3.8-1 8.7 2.7 11s8.7 1 11-2.7l48-80c2.3-3.8 1-8.7-2.7-11zm96 0c-3.8-2.3-8.7-1-11 2.7l-48 80c-2.3 3.8-1 8.7 2.7 11s8.7 1 11-2.7l48-80c2.3-3.8 1-8.7-2.7-11zm96 0c-3.8-2.3-8.7-1-11 2.7l-48 80c-2.3 3.8-1 8.7 2.7 11s8.7 1 11-2.7l48-80c2.3-3.8 1-8.7-2.7-11zM96 192c0-44.2 35.8-80 80-80c32 0 59.6 18.8 72.4 46c1.1 2.3 3.2 3.9 5.7 4.4s5.1-.2 6.9-1.9c11.4-10.3 26.4-16.5 42.9-16.5c35.3 0 64 28.7 64 64c0 7.5-1.3 14.7-3.7 21.4c-.8 2.4-.5 5 .9 7.1s3.7 3.4 6.2 3.5c33.7 1.8 60.5 29.7 60.5 63.9c0 35.3-28.7 64-64 64c-.7 0-1.5 0-2.2 0c0 0 0 0 0 0l-.3 0L99 367.9s0 0 0 0l-.3 0c-.9 0-1.8 0-2.8 0c-44.2 0-80-35.8-80-80c0-41.8 32.1-76.2 73.1-79.7c2.1-.2 4.1-1.2 5.5-2.8s2-3.8 1.8-5.9c-.2-2.5-.4-5-.4-7.6zm80-96c-53 0-96 43-96 96l0 1.3C34.6 200.9 0 240.4 0 288c0 53 43 96 96 96c1.1 0 2.1 0 3.2-.1l266.1 0c.9 0 1.8 0 2.6 0c44.2 0 80-35.8 80-80c0-39.3-28.4-72.1-65.8-78.7c1.2-5.6 1.9-11.3 1.9-17.2c0-44.2-35.8-80-80-80c-17 0-32.8 5.3-45.8 14.4C241.4 114.6 210.8 96 176 96z" />
    </Icon>
);

export default CloudMoonRain;