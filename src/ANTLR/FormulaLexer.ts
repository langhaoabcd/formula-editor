// Generated from ./FormulaLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class FormulaLexer extends Lexer {
	public static readonly OpenParen = 1;
	public static readonly CloseParen = 2;
	public static readonly OpenBrace = 3;
	public static readonly CloseBrace = 4;
	public static readonly Comma = 5;
	public static readonly Plus = 6;
	public static readonly Minus = 7;
	public static readonly Multiply = 8;
	public static readonly Divide = 9;
	public static readonly EQ = 10;
	public static readonly NE = 11;
	public static readonly GT = 12;
	public static readonly GTE = 13;
	public static readonly LT = 14;
	public static readonly LTE = 15;
	public static readonly BooleanLiteral = 16;
	public static readonly FunctionLiteral = 17;
	public static readonly FieldLiteral = 18;
	public static readonly DecimalLiteral = 19;
	public static readonly StringLiteral = 20;
	public static readonly WhiteSpaces = 21;
	public static readonly ERROR = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "ERROR",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "Comma", "Plus", 
		"Minus", "Multiply", "Divide", "EQ", "NE", "GT", "GTE", "LT", "LTE", "BooleanLiteral", 
		"FunctionLiteral", "FieldLiteral", "DecimalLiteral", "StringLiteral", 
		"WhiteSpaces", "DoubleStringCharacter", "SingleStringCharacter", "EscapeSequence", 
		"CharacterEscapeSequence", "HexEscapeSequence", "UnicodeEscapeSequence", 
		"ExtendedUnicodeEscapeSequence", "SingleEscapeCharacter", "NonEscapeCharacter", 
		"EscapeCharacter", "LineContinuation", "HexDigit", "DecimalIntegerLiteral", 
		"Field", "FieldPath", "FieldPathSegment", "FieldPathSubSegment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'{'", "'}'", "','", "'+'", "'-'", "'*'", "'/'", 
		"'='", "'<>'", "'>'", "'>='", "'<'", "'<='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "Comma", 
		"Plus", "Minus", "Multiply", "Divide", "EQ", "NE", "GT", "GTE", "LT", 
		"LTE", "BooleanLiteral", "FunctionLiteral", "FieldLiteral", "DecimalLiteral", 
		"StringLiteral", "WhiteSpaces",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FormulaLexer._LITERAL_NAMES, FormulaLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FormulaLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FormulaLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "FormulaLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return FormulaLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return FormulaLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FormulaLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FormulaLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x17\u027E\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
		"\x11z\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01CF" +
		"\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x07\x14\u01D6\n\x14\f\x14" +
		"\x0E\x14\u01D9\v\x14\x03\x14\x03\x14\x06\x14\u01DD\n\x14\r\x14\x0E\x14" +
		"\u01DE\x03\x14\x05\x14\u01E2\n\x14\x03\x15\x03\x15\x07\x15\u01E6\n\x15" +
		"\f\x15\x0E\x15\u01E9\v\x15\x03\x15\x03\x15\x03\x15\x07\x15\u01EE\n\x15" +
		"\f\x15\x0E\x15\u01F1\v\x15\x03\x15\x05\x15\u01F4\n\x15\x03\x16\x06\x16" +
		"\u01F7\n\x16\r\x16\x0E\x16\u01F8\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x05\x17\u0201\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0207" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u020E\n\x19\x03" +
		"\x1A\x03\x1A\x05\x1A\u0212\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x06\x1D" +
		"\u0221\n\x1D\r\x1D\x0E\x1D\u0222\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03 \x03 \x05 \u022D\n \x03!\x03!\x03!\x03\"\x03\"\x03#\x03#" +
		"\x05#\u0236\n#\x03#\x03#\x07#\u023A\n#\f#\x0E#\u023D\v#\x05#\u023F\n#" +
		"\x03$\x03$\x07$\u0243\n$\f$\x0E$\u0246\v$\x03$\x03$\x03$\x03$\x03$\x07" +
		"$\u024D\n$\f$\x0E$\u0250\v$\x03$\x03$\x03$\x07$\u0255\n$\f$\x0E$\u0258" +
		"\v$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u0260\n$\f$\x0E$\u0263\v$\x05$" +
		"\u0265\n$\x03%\x03%\x07%\u0269\n%\f%\x0E%\u026C\v%\x03&\x03&\x07&\u0270" +
		"\n&\f&\x0E&\u0273\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05" +
		"\'\u027D\n\'\x02\x02\x02(\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\'\x02\x15)\x02\x16+\x02\x17-\x02\x02/\x02\x021\x02\x023\x02\x025\x02" +
		"\x027\x02\x029\x02\x02;\x02\x02=\x02\x02?\x02\x02A\x02\x02C\x02\x02E\x02" +
		"\x02G\x02\x02I\x02\x02K\x02\x02M\x02\x02\x03\x02\r\x03\x022;\x06\x02\v" +
		"\v\r\x0E\"\"\xA2\xA2\x06\x02\f\f\x0F\x0F$$^^\x06\x02\f\f\x0F\x0F))^^\v" +
		"\x02$$))^^ddhhppttvvxx\x0E\x02\f\f\x0F\x0F$$))2;^^ddhhppttvxzz\x05\x02" +
		"2;wwzz\x05\x02\f\f\x0F\x0F\u202A\u202B\x05\x022;CHch\x05\x02C\\aac|\x06" +
		"\x022;C\\aac|\x02\u02CB\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
		"\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02" +
		"\x02\x03O\x03\x02\x02\x02\x05Q\x03\x02\x02\x02\x07S\x03\x02\x02\x02\t" +
		"U\x03\x02\x02\x02\vW\x03\x02\x02\x02\rY\x03\x02\x02\x02\x0F[\x03\x02\x02" +
		"\x02\x11]\x03\x02\x02\x02\x13_\x03\x02\x02\x02\x15a\x03\x02\x02\x02\x17" +
		"c\x03\x02\x02\x02\x19f\x03\x02\x02\x02\x1Bh\x03\x02\x02\x02\x1Dk\x03\x02" +
		"\x02\x02\x1Fm\x03\x02\x02\x02!y\x03\x02\x02\x02#\u01CE\x03\x02\x02\x02" +
		"%\u01D0\x03\x02\x02\x02\'\u01E1\x03\x02\x02\x02)\u01F3\x03\x02\x02\x02" +
		"+\u01F6\x03\x02\x02\x02-\u0200\x03\x02\x02\x02/\u0206\x03\x02\x02\x02" +
		"1\u020D\x03\x02\x02\x023\u0211\x03\x02\x02\x025\u0213\x03\x02\x02\x02" +
		"7\u0217\x03\x02\x02\x029\u021D\x03\x02\x02\x02;\u0226\x03\x02\x02\x02" +
		"=\u0228\x03\x02\x02\x02?\u022C\x03\x02\x02\x02A\u022E\x03\x02\x02\x02" +
		"C\u0231\x03\x02\x02\x02E\u023E\x03\x02\x02\x02G\u0264\x03\x02\x02\x02" +
		"I\u0266\x03\x02\x02\x02K\u026D\x03\x02\x02\x02M\u027C\x03\x02\x02\x02" +
		"OP\x07*\x02\x02P\x04\x03\x02\x02\x02QR\x07+\x02\x02R\x06\x03\x02\x02\x02" +
		"ST\x07}\x02\x02T\b\x03\x02\x02\x02UV\x07\x7F\x02\x02V\n\x03\x02\x02\x02" +
		"WX\x07.\x02\x02X\f\x03\x02\x02\x02YZ\x07-\x02\x02Z\x0E\x03\x02\x02\x02" +
		"[\\\x07/\x02\x02\\\x10\x03\x02\x02\x02]^\x07,\x02\x02^\x12\x03\x02\x02" +
		"\x02_`\x071\x02\x02`\x14\x03\x02\x02\x02ab\x07?\x02\x02b\x16\x03\x02\x02" +
		"\x02cd\x07>\x02\x02de\x07@\x02\x02e\x18\x03\x02\x02\x02fg\x07@\x02\x02" +
		"g\x1A\x03\x02\x02\x02hi\x07@\x02\x02ij\x07?\x02\x02j\x1C\x03\x02\x02\x02" +
		"kl\x07>\x02\x02l\x1E\x03\x02\x02\x02mn\x07>\x02\x02no\x07?\x02\x02o \x03" +
		"\x02\x02\x02pq\x07v\x02\x02qr\x07t\x02\x02rs\x07w\x02\x02sz\x07g\x02\x02" +
		"tu\x07h\x02\x02uv\x07c\x02\x02vw\x07n\x02\x02wx\x07u\x02\x02xz\x07g\x02" +
		"\x02yp\x03\x02\x02\x02yt\x03\x02\x02\x02z\"\x03\x02\x02\x02{|\x07F\x02" +
		"\x02|}\x07C\x02\x02}~\x07V\x02\x02~\u01CF\x07G\x02\x02\x7F\x80\x07F\x02" +
		"\x02\x80\x81\x07C\x02\x02\x81\x82\x07V\x02\x02\x82\x83\x07G\x02\x02\x83" +
		"\x84\x07X\x02\x02\x84\x85\x07C\x02\x02\x85\x86\x07N\x02\x02\x86\x87\x07" +
		"W\x02\x02\x87\u01CF\x07G\x02\x02\x88\x89\x07F\x02\x02\x89\x8A\x07C\x02" +
		"\x02\x8A\u01CF\x07[\x02\x02\x8B\x8C\x07F\x02\x02\x8C\x8D\x07C\x02\x02" +
		"\x8D\x8E\x07[\x02\x02\x8E\u01CF\x07U\x02\x02\x8F\x90\x07F\x02\x02\x90" +
		"\x91\x07C\x02\x02\x91\x92\x07[\x02\x02\x92\x93\x07U\x02\x02\x93\x94\x07" +
		"5\x02\x02\x94\x95\x078\x02\x02\x95\u01CF\x072\x02\x02\x96\x97\x07G\x02" +
		"\x02\x97\x98\x07F\x02\x02\x98\x99\x07C\x02\x02\x99\x9A\x07V\x02\x02\x9A" +
		"\u01CF\x07G\x02\x02\x9B\x9C\x07G\x02\x02\x9C\x9D\x07Q\x02\x02\x9D\x9E" +
		"\x07O\x02\x02\x9E\x9F\x07Q\x02\x02\x9F\xA0\x07P\x02\x02\xA0\xA1\x07V\x02" +
		"\x02\xA1\u01CF\x07J\x02\x02\xA2\xA3\x07J\x02\x02\xA3\xA4\x07Q\x02\x02" +
		"\xA4\xA5\x07W\x02\x02\xA5\u01CF\x07T\x02\x02\xA6\xA7\x07O\x02\x02\xA7" +
		"\xA8\x07K\x02\x02\xA8\xA9\x07P\x02\x02\xA9\xAA\x07W\x02\x02\xAA\xAB\x07" +
		"V\x02\x02\xAB\u01CF\x07G\x02\x02\xAC\xAD\x07K\x02\x02\xAD\xAE\x07U\x02" +
		"\x02\xAE\xAF\x07Q\x02\x02\xAF\xB0\x07Y\x02\x02\xB0\xB1\x07G\x02\x02\xB1" +
		"\xB2\x07G\x02\x02\xB2\xB3\x07M\x02\x02\xB3\xB4\x07P\x02\x02\xB4\xB5\x07" +
		"W\x02\x02\xB5\u01CF\x07O\x02\x02\xB6\xB7\x07O\x02\x02\xB7\xB8\x07Q\x02" +
		"\x02\xB8\xB9\x07P\x02\x02\xB9\xBA\x07V\x02\x02\xBA\u01CF\x07J\x02\x02" +
		"\xBB\xBC\x07P\x02\x02\xBC\xBD\x07Q\x02\x02\xBD\u01CF\x07Y\x02\x02\xBE" +
		"\xBF\x07U\x02\x02\xBF\xC0\x07G\x02\x02\xC0\xC1\x07E\x02\x02\xC1\xC2\x07" +
		"Q\x02\x02\xC2\xC3\x07P\x02\x02\xC3\u01CF\x07F\x02\x02\xC4\xC5\x07V\x02" +
		"\x02\xC5\xC6\x07K\x02\x02\xC6\xC7\x07O\x02\x02\xC7\u01CF\x07G\x02\x02" +
		"\xC8\xC9\x07V\x02\x02\xC9\xCA\x07K\x02\x02\xCA\xCB\x07O\x02\x02\xCB\xCC" +
		"\x07G\x02\x02\xCC\xCD\x07X\x02\x02\xCD\xCE\x07C\x02\x02\xCE\xCF\x07N\x02" +
		"\x02\xCF\xD0\x07W\x02\x02\xD0\u01CF\x07G\x02\x02\xD1\xD2\x07V\x02\x02" +
		"\xD2\xD3\x07Q\x02\x02\xD3\xD4\x07F\x02\x02\xD4\xD5\x07C\x02\x02\xD5\u01CF" +
		"\x07[\x02\x02\xD6\xD7\x07Y\x02\x02\xD7\xD8\x07G\x02\x02\xD8\xD9\x07G\x02" +
		"\x02\xD9\xDA\x07M\x02\x02\xDA\xDB\x07F\x02\x02\xDB\xDC\x07C\x02\x02\xDC" +
		"\u01CF\x07[\x02\x02\xDD\xDE\x07[\x02\x02\xDE\xDF\x07G\x02\x02\xDF\xE0" +
		"\x07C\x02\x02\xE0\u01CF\x07T\x02\x02\xE1\xE2\x07Y\x02\x02\xE2\xE3\x07" +
		"G\x02\x02\xE3\xE4\x07G\x02\x02\xE4\xE5\x07M\x02\x02\xE5\xE6\x07P\x02\x02" +
		"\xE6\xE7\x07W\x02\x02\xE7\u01CF\x07O\x02\x02\xE8\xE9\x07C\x02\x02\xE9" +
		"\xEA\x07P\x02\x02\xEA\u01CF\x07F\x02\x02\xEB\xEC\x07K\x02\x02\xEC\u01CF" +
		"\x07H\x02\x02\xED\xEE\x07P\x02\x02\xEE\xEF\x07Q\x02\x02\xEF\u01CF\x07" +
		"V\x02\x02\xF0\xF1\x07Q\x02\x02\xF1\u01CF\x07T\x02\x02\xF2\xF3\x07U\x02" +
		"\x02\xF3\xF4\x07Y\x02\x02\xF4\xF5\x07K\x02\x02\xF5\xF6\x07V\x02\x02\xF6" +
		"\xF7\x07E\x02\x02\xF7\u01CF\x07J\x02\x02\xF8\xF9\x07C\x02\x02\xF9\xFA" +
		"\x07D\x02\x02\xFA\u01CF\x07U\x02\x02\xFB\xFC\x07E\x02\x02\xFC\xFD\x07" +
		"G\x02\x02\xFD\xFE\x07K\x02\x02\xFE\xFF\x07N\x02\x02\xFF\u0100\x07K\x02" +
		"\x02\u0100\u0101\x07P\x02\x02\u0101\u01CF\x07I\x02\x02\u0102\u0103\x07" +
		"E\x02\x02\u0103\u0104\x07G\x02\x02\u0104\u0105\x07K\x02\x02\u0105\u0106" +
		"\x07N\x02\x02\u0106\u0107\x07K\x02\x02\u0107\u0108\x07P\x02\x02\u0108" +
		"\u0109\x07I\x02\x02\u0109\u010A\x07O\x02\x02\u010A\u010B\x07C\x02\x02" +
		"\u010B\u010C\x07V\x02\x02\u010C\u01CF\x07J\x02\x02\u010D\u010E\x07G\x02" +
		"\x02\u010E\u010F\x07Z\x02\x02\u010F\u01CF\x07R\x02\x02\u0110\u0111\x07" +
		"H\x02\x02\u0111\u0112\x07N\x02\x02\u0112\u0113\x07Q\x02\x02\u0113\u0114" +
		"\x07Q\x02\x02\u0114\u01CF\x07T\x02\x02\u0115\u0116\x07H\x02\x02\u0116" +
		"\u0117\x07N\x02\x02\u0117\u0118\x07Q\x02\x02\u0118\u0119\x07Q\x02\x02" +
		"\u0119\u011A\x07T\x02\x02\u011A\u011B\x07O\x02\x02\u011B\u011C\x07C\x02" +
		"\x02\u011C\u011D\x07V\x02\x02\u011D\u01CF\x07J\x02\x02\u011E\u011F\x07" +
		"N\x02\x02\u011F\u01CF\x07P\x02\x02\u0120\u0121\x07N\x02\x02\u0121\u0122" +
		"\x07Q\x02\x02\u0122\u01CF\x07I\x02\x02\u0123\u0124\x07N\x02\x02\u0124" +
		"\u0125\x07Q\x02\x02\u0125\u0126\x07I\x02\x02\u0126\u0127\x073\x02\x02" +
		"\u0127\u01CF\x072\x02\x02\u0128\u0129\x07O\x02\x02\u0129\u012A\x07C\x02" +
		"\x02\u012A\u01CF\x07Z\x02\x02\u012B\u012C\x07O\x02\x02\u012C\u012D\x07" +
		"K\x02\x02\u012D\u01CF\x07P\x02\x02\u012E\u012F\x07O\x02\x02\u012F\u0130" +
		"\x07Q\x02\x02\u0130\u01CF\x07F\x02\x02\u0131\u0132\x07T\x02\x02\u0132" +
		"\u0133\x07Q\x02\x02\u0133\u0134\x07W\x02\x02\u0134\u0135\x07P\x02\x02" +
		"\u0135\u01CF\x07F\x02\x02\u0136\u0137\x07T\x02\x02\u0137\u0138\x07Q\x02" +
		"\x02\u0138\u0139\x07W\x02\x02\u0139\u013A\x07P\x02\x02\u013A\u013B\x07" +
		"F\x02\x02\u013B\u013C\x07F\x02\x02\u013C\u013D\x07Q\x02\x02\u013D\u013E" +
		"\x07Y\x02\x02\u013E\u01CF\x07P\x02\x02\u013F\u0140\x07T\x02\x02\u0140" +
		"\u0141\x07Q\x02\x02\u0141\u0142\x07W\x02\x02\u0142\u0143\x07P\x02\x02" +
		"\u0143\u0144\x07F\x02\x02\u0144\u0145\x07W\x02\x02\u0145\u01CF\x07R\x02" +
		"\x02\u0146\u0147\x07U\x02\x02\u0147\u0148\x07S\x02\x02\u0148\u0149\x07" +
		"T\x02\x02\u0149\u01CF\x07V\x02\x02\u014A\u014B\x07C\x02\x02\u014B\u014C" +
		"\x07X\x02\x02\u014C\u014D\x07G\x02\x02\u014D\u014E\x07T\x02\x02\u014E" +
		"\u014F\x07C\x02\x02\u014F\u0150\x07I\x02\x02\u0150\u01CF\x07G\x02\x02" +
		"\u0151\u0152\x07U\x02\x02\u0152\u0153\x07W\x02\x02\u0153\u01CF\x07O\x02" +
		"\x02\u0154\u0155\x07E\x02\x02\u0155\u0156\x07Q\x02\x02\u0156\u0157\x07" +
		"W\x02\x02\u0157\u0158\x07P\x02\x02\u0158\u01CF\x07V\x02\x02\u0159\u015A" +
		"\x07E\x02\x02\u015A\u015B\x07Q\x02\x02\u015B\u015C\x07W\x02\x02\u015C" +
		"\u015D\x07P\x02\x02\u015D\u015E\x07V\x02\x02\u015E\u01CF\x07C\x02\x02" +
		"\u015F\u0160\x07R\x02\x02\u0160\u0161\x07Q\x02\x02\u0161\u0162\x07Y\x02" +
		"\x02\u0162\u0163\x07G\x02\x02\u0163\u01CF\x07T\x02\x02\u0164\u0165\x07" +
		"E\x02\x02\u0165\u0166\x07Q\x02\x02\u0166\u0167\x07P\x02\x02\u0167\u0168" +
		"\x07E\x02\x02\u0168\u0169\x07C\x02\x02\u0169\u016A\x07V\x02\x02\u016A" +
		"\u016B\x07G\x02\x02\u016B\u016C\x07P\x02\x02\u016C\u016D\x07C\x02\x02" +
		"\u016D\u016E\x07V\x02\x02\u016E\u01CF\x07G\x02\x02\u016F\u0170\x07G\x02" +
		"\x02\u0170\u0171\x07Z\x02\x02\u0171\u0172\x07C\x02\x02\u0172\u0173\x07" +
		"E\x02\x02\u0173\u01CF\x07V\x02\x02\u0174\u0175\x07H\x02\x02\u0175\u0176" +
		"\x07K\x02\x02\u0176\u0177\x07P\x02\x02\u0177\u01CF\x07F\x02\x02\u0178" +
		"\u0179\x07N\x02\x02\u0179\u017A\x07G\x02\x02\u017A\u017B\x07H\x02\x02" +
		"\u017B\u01CF\x07V\x02\x02\u017C\u017D\x07N\x02\x02\u017D\u017E\x07G\x02" +
		"\x02\u017E\u01CF\x07P\x02\x02\u017F\u0180\x07N\x02\x02\u0180\u0181\x07" +
		"Q\x02\x02\u0181\u0182\x07Y\x02\x02\u0182\u0183\x07G\x02\x02\u0183\u01CF" +
		"\x07T\x02\x02\u0184\u0185\x07O\x02\x02\u0185\u0186\x07K\x02\x02\u0186" +
		"\u01CF\x07F\x02\x02\u0187\u0188\x07P\x02\x02\u0188\u0189\x07W\x02\x02" +
		"\u0189\u018A\x07O\x02\x02\u018A\u018B\x07D\x02\x02\u018B\u018C\x07G\x02" +
		"\x02\u018C\u018D\x07T\x02\x02\u018D\u018E\x07X\x02\x02\u018E\u018F\x07" +
		"C\x02\x02\u018F\u0190\x07N\x02\x02\u0190\u0191\x07W\x02\x02\u0191\u01CF" +
		"\x07G\x02\x02\u0192\u0193\x07R\x02\x02\u0193\u0194\x07T\x02\x02\u0194" +
		"\u0195\x07Q\x02\x02\u0195\u0196\x07R\x02\x02\u0196\u0197\x07G\x02\x02" +
		"\u0197\u01CF\x07T\x02\x02\u0198\u0199\x07T\x02\x02\u0199\u019A\x07G\x02" +
		"\x02\u019A\u019B\x07R\x02\x02\u019B\u01CF\x07V\x02\x02\u019C\u019D\x07" +
		"T\x02\x02\u019D\u019E\x07K\x02\x02\u019E\u019F\x07I\x02\x02\u019F\u01A0" +
		"\x07J\x02\x02\u01A0\u01CF\x07V\x02\x02\u01A1\u01A2\x07U\x02\x02\u01A2" +
		"\u01A3\x07G\x02\x02\u01A3\u01A4\x07C\x02\x02\u01A4\u01A5\x07T\x02\x02" +
		"\u01A5\u01A6\x07E\x02\x02\u01A6\u01CF\x07J\x02\x02\u01A7\u01A8\x07U\x02" +
		"\x02\u01A8\u01A9\x07R\x02\x02\u01A9\u01AA\x07N\x02\x02\u01AA\u01AB\x07" +
		"K\x02\x02\u01AB\u01CF\x07V\x02\x02\u01AC\u01AD\x07U\x02\x02\u01AD\u01AE" +
		"\x07W\x02\x02\u01AE\u01AF\x07D\x02\x02\u01AF\u01B0\x07U\x02\x02\u01B0" +
		"\u01B1\x07V\x02\x02\u01B1\u01B2\x07K\x02\x02\u01B2\u01B3\x07V\x02\x02" +
		"\u01B3\u01B4\x07W\x02\x02\u01B4\u01B5\x07V\x02\x02\u01B5\u01CF\x07G\x02" +
		"\x02\u01B6\u01B7\x07V\x02\x02\u01B7\u01B8\x07T\x02\x02\u01B8\u01B9\x07" +
		"K\x02\x02\u01B9\u01CF\x07O\x02\x02\u01BA\u01BB\x07W\x02\x02\u01BB\u01BC" +
		"\x07R\x02\x02\u01BC\u01BD\x07R\x02\x02\u01BD\u01BE\x07G\x02\x02\u01BE" +
		"\u01CF\x07T\x02\x02\u01BF\u01C0\x07K\x02\x02\u01C0\u01C1\x07U\x02\x02" +
		"\u01C1\u01C2\x07D\x02\x02\u01C2\u01C3\x07N\x02\x02\u01C3\u01C4\x07C\x02" +
		"\x02\u01C4\u01C5\x07P\x02\x02\u01C5\u01CF\x07M\x02\x02\u01C6\u01C7\x07" +
		"K\x02\x02\u01C7\u01C8\x07P\x02\x02\u01C8\u01C9\x07E\x02\x02\u01C9\u01CA" +
		"\x07N\x02\x02\u01CA\u01CB\x07W\x02\x02\u01CB\u01CC\x07F\x02\x02\u01CC" +
		"\u01CD\x07G\x02\x02\u01CD\u01CF\x07U\x02\x02\u01CE{\x03\x02\x02\x02\u01CE" +
		"\x7F\x03\x02\x02\x02\u01CE\x88\x03\x02\x02\x02\u01CE\x8B\x03\x02\x02\x02" +
		"\u01CE\x8F\x03\x02\x02\x02\u01CE\x96\x03\x02\x02\x02\u01CE\x9B\x03\x02" +
		"\x02\x02\u01CE\xA2\x03\x02\x02\x02\u01CE\xA6\x03\x02\x02\x02\u01CE\xAC" +
		"\x03\x02\x02\x02\u01CE\xB6\x03\x02\x02\x02\u01CE\xBB\x03\x02\x02\x02\u01CE" +
		"\xBE\x03\x02\x02\x02\u01CE\xC4\x03\x02\x02\x02\u01CE\xC8\x03\x02\x02\x02" +
		"\u01CE\xD1\x03\x02\x02\x02\u01CE\xD6\x03\x02\x02\x02\u01CE\xDD\x03\x02" +
		"\x02\x02\u01CE\xE1\x03\x02\x02\x02\u01CE\xE8\x03\x02\x02\x02\u01CE\xEB" +
		"\x03\x02\x02\x02\u01CE\xED\x03\x02\x02\x02\u01CE\xF0\x03\x02\x02\x02\u01CE" +
		"\xF2\x03\x02\x02\x02\u01CE\xF8\x03\x02\x02\x02\u01CE\xFB\x03\x02\x02\x02" +
		"\u01CE\u0102\x03\x02\x02\x02\u01CE\u010D\x03\x02\x02\x02\u01CE\u0110\x03" +
		"\x02\x02\x02\u01CE\u0115\x03\x02\x02\x02\u01CE\u011E\x03\x02\x02\x02\u01CE" +
		"\u0120\x03\x02\x02\x02\u01CE\u0123\x03\x02\x02\x02\u01CE\u0128\x03\x02" +
		"\x02\x02\u01CE\u012B\x03\x02\x02\x02\u01CE\u012E\x03\x02\x02\x02\u01CE" +
		"\u0131\x03\x02\x02\x02\u01CE\u0136\x03\x02\x02\x02\u01CE\u013F\x03\x02" +
		"\x02\x02\u01CE\u0146\x03\x02\x02\x02\u01CE\u014A\x03\x02\x02\x02\u01CE" +
		"\u0151\x03\x02\x02\x02\u01CE\u0154\x03\x02\x02\x02\u01CE\u0159\x03\x02" +
		"\x02\x02\u01CE\u015F\x03\x02\x02\x02\u01CE\u0164\x03\x02\x02\x02\u01CE" +
		"\u016F\x03\x02\x02\x02\u01CE\u0174\x03\x02\x02\x02\u01CE\u0178\x03\x02" +
		"\x02\x02\u01CE\u017C\x03\x02\x02\x02\u01CE\u017F\x03\x02\x02\x02\u01CE" +
		"\u0184\x03\x02\x02\x02\u01CE\u0187\x03\x02\x02\x02\u01CE\u0192\x03\x02" +
		"\x02\x02\u01CE\u0198\x03\x02\x02\x02\u01CE\u019C\x03\x02\x02\x02\u01CE" +
		"\u01A1\x03\x02\x02\x02\u01CE\u01A7\x03\x02\x02\x02\u01CE\u01AC\x03\x02" +
		"\x02\x02\u01CE\u01B6\x03\x02\x02\x02\u01CE\u01BA\x03\x02\x02\x02\u01CE" +
		"\u01BF\x03\x02\x02\x02\u01CE\u01C6\x03\x02\x02\x02\u01CF$\x03\x02\x02" +
		"\x02\u01D0\u01D1\x05G$\x02\u01D1&\x03\x02\x02\x02\u01D2\u01D3\x05E#\x02" +
		"\u01D3\u01D7\x070\x02\x02\u01D4\u01D6\t\x02\x02\x02\u01D5\u01D4\x03\x02" +
		"\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7" +
		"\u01D8\x03\x02\x02\x02\u01D8\u01E2\x03\x02\x02\x02\u01D9\u01D7\x03\x02" +
		"\x02\x02\u01DA\u01DC\x070\x02\x02\u01DB\u01DD\t\x02\x02\x02\u01DC\u01DB" +
		"\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02" +
		"\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02\x02\u01E0\u01E2\x05" +
		"E#\x02\u01E1\u01D2\x03\x02\x02\x02\u01E1\u01DA\x03\x02\x02\x02\u01E1\u01E0" +
		"\x03\x02\x02\x02\u01E2(\x03\x02\x02\x02\u01E3\u01E7\x07$\x02\x02\u01E4" +
		"\u01E6\x05-\x17\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02" +
		"\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA" +
		"\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01F4\x07$\x02\x02" +
		"\u01EB\u01EF\x07)\x02\x02\u01EC\u01EE\x05/\x18\x02\u01ED\u01EC\x03\x02" +
		"\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF" +
		"\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01EF\x03\x02" +
		"\x02\x02\u01F2\u01F4\x07)\x02\x02\u01F3\u01E3\x03\x02\x02\x02\u01F3\u01EB" +
		"\x03\x02\x02\x02\u01F4*\x03\x02\x02\x02\u01F5\u01F7\t\x03\x02\x02\u01F6" +
		"\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01F6\x03\x02" +
		"\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA" +
		"\u01FB\b\x16\x02\x02\u01FB,\x03\x02\x02\x02\u01FC\u0201\n\x04\x02\x02" +
		"\u01FD\u01FE\x07^\x02\x02\u01FE\u0201\x051\x19\x02\u01FF\u0201\x05A!\x02" +
		"\u0200\u01FC\x03\x02\x02\x02\u0200\u01FD\x03\x02\x02\x02\u0200\u01FF\x03" +
		"\x02\x02\x02\u0201.\x03\x02\x02\x02\u0202\u0207\n\x05\x02\x02\u0203\u0204" +
		"\x07^\x02\x02\u0204\u0207\x051\x19\x02\u0205\u0207\x05A!\x02\u0206\u0202" +
		"\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0206\u0203\x03\x02\x02\x02\u0206\u0205\x03\x02\x02\x02\u02070\x03\x02" +
		"\x02\x02\u0208\u020E\x053\x1A\x02\u0209\u020E\x072\x02\x02\u020A\u020E" +
		"\x055\x1B\x02\u020B\u020E\x057\x1C\x02\u020C\u020E\x059\x1D\x02\u020D" +
		"\u0208\x03\x02\x02\x02\u020D\u0209\x03\x02\x02\x02\u020D\u020A\x03\x02" +
		"\x02\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020C\x03\x02\x02\x02\u020E" +
		"2\x03\x02\x02\x02\u020F\u0212\x05;\x1E\x02\u0210\u0212\x05=\x1F\x02\u0211" +
		"\u020F\x03\x02\x02\x02\u0211\u0210\x03\x02\x02\x02\u02124\x03\x02\x02" +
		"\x02\u0213\u0214\x07z\x02\x02\u0214\u0215\x05C\"\x02\u0215\u0216\x05C" +
		"\"\x02\u02166\x03\x02\x02\x02\u0217\u0218\x07w\x02\x02\u0218\u0219\x05" +
		"C\"\x02\u0219\u021A\x05C\"\x02\u021A\u021B\x05C\"\x02\u021B\u021C\x05" +
		"C\"\x02\u021C8\x03\x02\x02\x02\u021D\u021E\x07w\x02\x02\u021E\u0220\x07" +
		"}\x02\x02\u021F\u0221\x05C\"\x02\u0220\u021F\x03\x02\x02\x02\u0221\u0222" +
		"\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02" +
		"\u0223\u0224\x03\x02\x02\x02\u0224\u0225\x07\x7F\x02\x02\u0225:\x03\x02" +
		"\x02\x02\u0226\u0227\t\x06\x02\x02\u0227<\x03\x02\x02\x02\u0228\u0229" +
		"\n\x07\x02\x02\u0229>\x03\x02\x02\x02\u022A\u022D\x05;\x1E\x02\u022B\u022D" +
		"\t\b\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C\u022B\x03\x02\x02\x02\u022D" +
		"@\x03\x02\x02\x02\u022E\u022F\x07^\x02\x02\u022F\u0230\t\t\x02\x02\u0230" +
		"B\x03\x02\x02\x02\u0231\u0232\t\n\x02\x02\u0232D\x03\x02\x02\x02\u0233" +
		"\u023F\x072\x02\x02\u0234\u0236\x07/\x02\x02\u0235\u0234\x03\x02\x02\x02" +
		"\u0235\u0236\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u023B\t" +
		"\x02\x02\x02\u0238\u023A\t\x02\x02\x02\u0239\u0238\x03\x02\x02\x02\u023A" +
		"\u023D\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02" +
		"\x02\x02\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E" +
		"\u0233\x03\x02\x02\x02\u023E\u0235\x03\x02\x02\x02\u023FF\x03\x02\x02" +
		"\x02\u0240\u0244\x05K&\x02\u0241\u0243\x05M\'\x02\u0242\u0241\x03\x02" +
		"\x02\x02\u0243\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0244" +
		"\u0245\x03\x02\x02\x02\u0245\u0265\x03\x02\x02\x02\u0246\u0244\x03\x02" +
		"\x02\x02\u0247\u0248\x05K&\x02\u0248\u0249\x07]\x02\x02\u0249\u024A\x05" +
		"E#\x02\u024A\u024E\x07_\x02\x02\u024B\u024D\x05M\'\x02\u024C\u024B\x03" +
		"\x02\x02\x02\u024D\u0250\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024E" +
		"\u024F\x03\x02\x02\x02\u024F\u0265\x03\x02\x02\x02\u0250\u024E\x03\x02" +
		"\x02\x02\u0251\u0252\x07&\x02\x02\u0252\u0256\x05K&\x02\u0253\u0255\x05" +
		"M\'\x02\u0254\u0253\x03\x02\x02\x02\u0255\u0258\x03\x02\x02\x02\u0256" +
		"\u0254\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257\u0265\x03\x02" +
		"\x02\x02\u0258\u0256\x03\x02\x02\x02\u0259\u025A\x07&\x02\x02\u025A\u025B" +
		"\x05K&\x02\u025B\u025C\x07]\x02\x02\u025C\u025D\x05E#\x02\u025D\u0261" +
		"\x07_\x02\x02\u025E\u0260\x05M\'\x02\u025F\u025E\x03\x02\x02\x02\u0260" +
		"\u0263\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0261\u0262\x03\x02" +
		"\x02\x02\u0262\u0265\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0264" +
		"\u0240\x03\x02\x02\x02\u0264\u0247\x03\x02\x02\x02\u0264\u0251\x03\x02" +
		"\x02\x02\u0264\u0259\x03\x02\x02\x02\u0265H\x03\x02\x02\x02\u0266\u026A" +
		"\x05K&\x02\u0267\u0269\x05M\'\x02\u0268\u0267\x03\x02\x02\x02\u0269\u026C" +
		"\x03\x02\x02\x02\u026A\u0268\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02" +
		"\u026BJ\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026D\u0271\t\v\x02" +
		"\x02\u026E\u0270\t\f\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270\u0273\x03" +
		"\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272" +
		"L\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0275\x070\x02\x02" +
		"\u0275\u027D\x05K&\x02\u0276\u0277\x070\x02\x02\u0277\u0278\x05K&\x02" +
		"\u0278\u0279\x07]\x02\x02\u0279\u027A\x05E#\x02\u027A\u027B\x07_\x02\x02" +
		"\u027B\u027D\x03\x02\x02\x02\u027C\u0274\x03\x02\x02\x02\u027C\u0276\x03" +
		"\x02\x02\x02\u027DN\x03\x02\x02\x02\x1D\x02y\u01CE\u01D7\u01DE\u01E1\u01E7" +
		"\u01EF\u01F3\u01F8\u0200\u0206\u020D\u0211\u0222\u022C\u0235\u023B\u023E" +
		"\u0244\u024E\u0256\u0261\u0264\u026A\u0271\u027C\x03\x02\x03\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			FormulaLexer._serializedATNSegment0,
			FormulaLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FormulaLexer.__ATN) {
			FormulaLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FormulaLexer._serializedATN));
		}

		return FormulaLexer.__ATN;
	}

}
