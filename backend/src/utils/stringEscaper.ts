// utils/stringEscaper.ts

export function escapeString(input: string): string {
    return input.replace(/[\\"\x00-\x1f\x7f-\x9f]/g, (character) => {
      switch (character) {
        case '"':
          return '\\"';
        case '\\':
          return '\\\\';
        default:
          return '\\u' + ('0000' + character.charCodeAt(0).toString(16)).slice(-4);
      }
    });
  }
  
  export function unescapeString(input: string): string {
    return input.replace(/\\(["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, (match, escaped) => {
      switch (escaped.charAt(0)) {
        case '"':
        case '\\':
        case '/':
          return escaped;
        case 'b':
          return '\b';
        case 'f':
          return '\f';
        case 'n':
          return '\n';
        case 'r':
          return '\r';
        case 't':
          return '\t';
        case 'u':
          return String.fromCharCode(parseInt(escaped.slice(1), 16));
        default:
          return match;
      }
    });
  }
  
  // Usage example
  const userInput = 'This is a "quoted" string with \'single\' quotes';
  const escaped = escapeString(userInput);
  console.log(escaped); // This is a \"quoted\" string with 'single' quotes
  console.log(unescapeString(escaped)); // This is a "quoted" string with 'single' quotes