 * 2 > IncomingMessage;
{
    _readableState: ReadableState;
    {
        objectMode: false,
            highWaterMark;
        16384,
            buffer;
        BufferList;
        {
            head: null, tail;
            null, length;
            0;
        }
        length: 0,
            pipes;
        [],
            flowing;
        null,
            ended;
        true,
            endEmitted;
        false,
            reading;
        false,
            constructed;
        true,
            sync;
        true,
            needReadable;
        false,
            emittedReadable;
        false,
            readableListening;
        false,
            resumeScheduled;
        false,
            errorEmitted;
        false,
            emitClose;
        true,
            autoDestroy;
        true,
            destroyed;
        false,
            errored;
        null,
            closed;
        false,
            closeEmitted;
        false,
            defaultEncoding;
        'utf8',
            awaitDrainWriters;
        null,
            multiAwaitDrain;
        false,
            readingMore;
        true,
            dataEmitted;
        false,
            decoder;
        null,
            encoding;
        null,
            [Symbol(kPaused)];
        null;
    }
    _events: [Object, null, prototype];
    {
        end: [Function, clearRequestTimeout];
    }
    _eventsCount: 1,
        _maxListeners;
    undefined,
        socket;
     * 1 > Socket;
    {
        connecting: false,
            _hadError;
        false,
            _parent;
        null,
            _host;
        null,
            _readableState;
        ReadableState;
        {
            objectMode: false,
                highWaterMark;
            16384,
                buffer;
            BufferList;
            {
                head: null, tail;
                null, length;
                0;
            }
            length: 0,
                pipes;
            [],
                flowing;
            true,
                ended;
            false,
                endEmitted;
            false,
                reading;
            true,
                constructed;
            true,
                sync;
            false,
                needReadable;
            true,
                emittedReadable;
            false,
                readableListening;
            false,
                resumeScheduled;
            false,
                errorEmitted;
            false,
                emitClose;
            false,
                autoDestroy;
            true,
                destroyed;
            false,
                errored;
            null,
                closed;
            false,
                closeEmitted;
            false,
                defaultEncoding;
            'utf8',
                awaitDrainWriters;
            null,
                multiAwaitDrain;
            false,
                readingMore;
            false,
                dataEmitted;
            false,
                decoder;
            null,
                encoding;
            null,
                [Symbol(kPaused)];
            false;
        }
        _events: [Object, null, prototype];
        {
            end: [Array],
                timeout;
            [Function, socketOnTimeout],
                data;
            [Function, bound, socketOnData],
                error;
            [Function, socketOnError],
                close;
            [Array],
                drain;
            [Function, bound, socketOnDrain],
                resume;
            [Function, onSocketResume],
                pause;
            [Function, onSocketPause];
        }
        _eventsCount: 8,
            _maxListeners;
        undefined,
            _writableState;
        WritableState;
        {
            objectMode: false,
                highWaterMark;
            16384,
                finalCalled;
            false,
                needDrain;
            false,
                ending;
            false,
                ended;
            false,
                finished;
            false,
                destroyed;
            false,
                decodeStrings;
            false,
                defaultEncoding;
            'utf8',
                length;
            0,
                writing;
            false,
                corked;
            0,
                sync;
            false,
                bufferProcessing;
            false,
                onwrite;
            [Function, bound, onwrite],
                writecb;
            null,
                writelen;
            0,
                afterWriteTickInfo;
            null,
                buffered;
            [],
                bufferedIndex;
            0,
                allBuffers;
            true,
                allNoop;
            true,
                pendingcb;
            0,
                constructed;
            true,
                prefinished;
            false,
                errorEmitted;
            false,
                emitClose;
            false,
                autoDestroy;
            true,
                errored;
            null,
                closed;
            false,
                closeEmitted;
            false,
                [Symbol(kOnFinished)];
            [];
        }
        allowHalfOpen: true,
            _sockname;
        null,
            _pendingData;
        null,
            _pendingEncoding;
        '',
            server;
        Server;
        {
            maxHeaderSize: undefined,
                insecureHTTPParser;
            undefined,
                _events;
            [Object, null, prototype],
                _eventsCount;
            2,
                _maxListeners;
            undefined,
                _connections;
            6,
                _handle;
            [TCP],
                _usingWorkers;
            false,
                _workers;
            [],
                _unref;
            false,
                allowHalfOpen;
            true,
                pauseOnConnect;
            false,
                noDelay;
            false,
                keepAlive;
            false,
                keepAliveInitialDelay;
            0,
                httpAllowHalfOpen;
            false,
                timeout;
            0,
                keepAliveTimeout;
            5000,
                maxHeadersCount;
            null,
                maxRequestsPerSocket;
            0,
                headersTimeout;
            60000,
                requestTimeout;
            0,
                _connectionKey;
            '6::::3000',
                [Symbol(IncomingMessage)];
            [Function, IncomingMessage],
                [Symbol(ServerResponse)];
            [Function, ServerResponse],
                [Symbol(kCapture)];
            false,
                [Symbol(async_id_symbol)];
            13;
        }
        _server: Server;
        {
            maxHeaderSize: undefined,
                insecureHTTPParser;
            undefined,
                _events;
            [Object, null, prototype],
                _eventsCount;
            2,
                _maxListeners;
            undefined,
                _connections;
            6,
                _handle;
            [TCP],
                _usingWorkers;
            false,
                _workers;
            [],
                _unref;
            false,
                allowHalfOpen;
            true,
                pauseOnConnect;
            false,
                noDelay;
            false,
                keepAlive;
            false,
                keepAliveInitialDelay;
            0,
                httpAllowHalfOpen;
            false,
                timeout;
            0,
                keepAliveTimeout;
            5000,
                maxHeadersCount;
            null,
                maxRequestsPerSocket;
            0,
                headersTimeout;
            60000,
                requestTimeout;
            0,
                _connectionKey;
            '6::::3000',
                [Symbol(IncomingMessage)];
            [Function, IncomingMessage],
                [Symbol(ServerResponse)];
            [Function, ServerResponse],
                [Symbol(kCapture)];
            false,
                [Symbol(async_id_symbol)];
            13;
        }
        parser: HTTPParser;
        {
            '0';
            [Function, bound, setRequestTimeout],
                '1';
            [Function, parserOnHeaders],
                '2';
            [Function, parserOnHeadersComplete],
                '3';
            [Function, parserOnBody],
                '4';
            [Function, parserOnMessageComplete],
                '5';
            [Function, bound, onParserExecute],
                '6';
            [Function, bound, onParserTimeout],
                _headers;
            [],
                _url;
            '',
                socket;
            [Circular * 1],
                incoming;
            [Circular * 2],
                outgoing;
            null,
                maxHeaderPairs;
            2000,
                _consumed;
            true,
                onIncoming;
            [Function, bound, parserOnIncoming],
                [Symbol(resource_symbol)];
            [HTTPServerAsyncResource];
        }
        on: [Function, socketListenerWrap],
            addListener;
        [Function, socketListenerWrap],
            prependListener;
        [Function, socketListenerWrap],
            setEncoding;
        [Function, socketSetEncoding],
            _paused;
        false,
            _httpMessage;
        ServerResponse;
        {
            _events: [Object, null, prototype],
                _eventsCount;
            1,
                _maxListeners;
            undefined,
                outputData;
            [],
                outputSize;
            0,
                writable;
            true,
                destroyed;
            false,
                _last;
            false,
                chunkedEncoding;
            false,
                shouldKeepAlive;
            true,
                maxRequestsOnConnectionReached;
            false,
                _defaultKeepAlive;
            true,
                useChunkedEncodingByDefault;
            true,
                sendDate;
            true,
                _removedConnection;
            false,
                _removedContLen;
            false,
                _removedTE;
            false,
                _contentLength;
            null,
                _hasBody;
            true,
                _trailer;
            '',
                finished;
            false,
                _headerSent;
            false,
                _closed;
            false,
                socket;
            [Circular * 1],
                _header;
            null,
                _keepAliveTimeout;
            5000,
                _onPendingData;
            [Function, bound, updateOutgoingData],
                req;
            [Circular * 2],
                _sent100;
            false,
                _expect_continue;
            false,
                locals;
            [Object, null, prototype];
            { }
            writeHead: [Function, writeHead],
                end;
            [Function, end],
                [Symbol(kCapture)];
            false,
                [Symbol(kNeedDrain)];
            false,
                [Symbol(corked)];
            0,
                [Symbol(kOutHeaders)];
            [Object, null, prototype];
        }
        timeout: 0,
            [Symbol(async_id_symbol)];
        225,
            [Symbol(kHandle)];
        TCP;
        {
            reading: true,
                onconnection;
            null,
                _consumed;
            true,
                [Symbol(owner_symbol)];
            [Circular * 1];
        }
        [Symbol(lastWriteQueueSize)];
        0,
            [Symbol(timeout)];
        Timeout;
        {
            _idleTimeout: -1,
                _idlePrev;
            null,
                _idleNext;
            null,
                _idleStart;
            5279,
                _onTimeout;
            null,
                _timerArgs;
            undefined,
                _repeat;
            null,
                _destroyed;
            true,
                [Symbol(refed)];
            false,
                [Symbol(kHasPrimitive)];
            false,
                [Symbol(asyncId)];
            1384,
                [Symbol(triggerId)];
            1380;
        }
        [Symbol(kBuffer)];
        null,
            [Symbol(kBufferCb)];
        null,
            [Symbol(kBufferGen)];
        null,
            [Symbol(kCapture)];
        false,
            [Symbol(kSetNoDelay)];
        false,
            [Symbol(kSetKeepAlive)];
        false,
            [Symbol(kSetKeepAliveInitialDelay)];
        0,
            [Symbol(kBytesRead)];
        0,
            [Symbol(kBytesWritten)];
        0,
            [Symbol(RequestTimeout)];
        undefined;
    }
    httpVersionMajor: 1,
        httpVersionMinor;
    1,
        httpVersion;
    '1.1',
        complete;
    true,
        rawHeaders;
    [
        'Host',
        'localhost:3000',
        'Connection',
        'keep-alive',
        'Cache-Control',
        'max-age=0',
        'sec-ch-ua',
        '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
        'sec-ch-ua-mobile',
        '?0',
        'sec-ch-ua-platform',
        '"Windows"',
        'Upgrade-Insecure-Requests',
        '1',
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        'Accept',
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site',
        'none',
        'Sec-Fetch-Mode',
        'navigate',
        'Sec-Fetch-User',
        '?1',
        'Sec-Fetch-Dest',
        'document',
        'Accept-Encoding',
        'gzip, deflate, br',
        'Accept-Language',
        'en,vi;q=0.9,vi-VN;q=0.8',
        'Cookie',
        'Webstorm-2ab7ddf6=1d3612aa-cd63-4105-a7d0-bece08c41411; connect.sid=s%3A7Vt2x6-hAGuokuTTN0sk2Ib1ISjPB3Tz.Op%2FXQuglZytd7UOCL7o35uYZ51FRT2qeLLyJNrsDaBk',
        'If-None-Match',
        'W/"d-R2eoxnyopImzswz1XDToC/GK5Ec"'
    ],
        rawTrailers;
    [],
        aborted;
    false,
        upgrade;
    false,
        url;
    '/product/cart',
        method;
    'GET',
        statusCode;
    null,
        statusMessage;
    null,
        client;
     * 1 > Socket;
    {
        connecting: false,
            _hadError;
        false,
            _parent;
        null,
            _host;
        null,
            _readableState;
        ReadableState;
        {
            objectMode: false,
                highWaterMark;
            16384,
                buffer;
            BufferList;
            {
                head: null, tail;
                null, length;
                0;
            }
            length: 0,
                pipes;
            [],
                flowing;
            true,
                ended;
            false,
                endEmitted;
            false,
                reading;
            true,
                constructed;
            true,
                sync;
            false,
                needReadable;
            true,
                emittedReadable;
            false,
                readableListening;
            false,
                resumeScheduled;
            false,
                errorEmitted;
            false,
                emitClose;
            false,
                autoDestroy;
            true,
                destroyed;
            false,
                errored;
            null,
                closed;
            false,
                closeEmitted;
            false,
                defaultEncoding;
            'utf8',
                awaitDrainWriters;
            null,
                multiAwaitDrain;
            false,
                readingMore;
            false,
                dataEmitted;
            false,
                decoder;
            null,
                encoding;
            null,
                [Symbol(kPaused)];
            false;
        }
        _events: [Object, null, prototype];
        {
            end: [Array],
                timeout;
            [Function, socketOnTimeout],
                data;
            [Function, bound, socketOnData],
                error;
            [Function, socketOnError],
                close;
            [Array],
                drain;
            [Function, bound, socketOnDrain],
                resume;
            [Function, onSocketResume],
                pause;
            [Function, onSocketPause];
        }
        _eventsCount: 8,
            _maxListeners;
        undefined,
            _writableState;
        WritableState;
        {
            objectMode: false,
                highWaterMark;
            16384,
                finalCalled;
            false,
                needDrain;
            false,
                ending;
            false,
                ended;
            false,
                finished;
            false,
                destroyed;
            false,
                decodeStrings;
            false,
                defaultEncoding;
            'utf8',
                length;
            0,
                writing;
            false,
                corked;
            0,
                sync;
            false,
                bufferProcessing;
            false,
                onwrite;
            [Function, bound, onwrite],
                writecb;
            null,
                writelen;
            0,
                afterWriteTickInfo;
            null,
                buffered;
            [],
                bufferedIndex;
            0,
                allBuffers;
            true,
                allNoop;
            true,
                pendingcb;
            0,
                constructed;
            true,
                prefinished;
            false,
                errorEmitted;
            false,
                emitClose;
            false,
                autoDestroy;
            true,
                errored;
            null,
                closed;
            false,
                closeEmitted;
            false,
                [Symbol(kOnFinished)];
            [];
        }
        allowHalfOpen: true,
            _sockname;
        null,
            _pendingData;
        null,
            _pendingEncoding;
        '',
            server;
        Server;
        {
            maxHeaderSize: undefined,
                insecureHTTPParser;
            undefined,
                _events;
            [Object, null, prototype],
                _eventsCount;
            2,
                _maxListeners;
            undefined,
                _connections;
            6,
                _handle;
            [TCP],
                _usingWorkers;
            false,
                _workers;
            [],
                _unref;
            false,
                allowHalfOpen;
            true,
                pauseOnConnect;
            false,
                noDelay;
            false,
                keepAlive;
            false,
                keepAliveInitialDelay;
            0,
                httpAllowHalfOpen;
            false,
                timeout;
            0,
                keepAliveTimeout;
            5000,
                maxHeadersCount;
            null,
                maxRequestsPerSocket;
            0,
                headersTimeout;
            60000,
                requestTimeout;
            0,
                _connectionKey;
            '6::::3000',
                [Symbol(IncomingMessage)];
            [Function, IncomingMessage],
                [Symbol(ServerResponse)];
            [Function, ServerResponse],
                [Symbol(kCapture)];
            false,
                [Symbol(async_id_symbol)];
            13;
        }
        _server: Server;
        {
            maxHeaderSize: undefined,
                insecureHTTPParser;
            undefined,
                _events;
            [Object, null, prototype],
                _eventsCount;
            2,
                _maxListeners;
            undefined,
                _connections;
            6,
                _handle;
            [TCP],
                _usingWorkers;
            false,
                _workers;
            [],
                _unref;
            false,
                allowHalfOpen;
            true,
                pauseOnConnect;
            false,
                noDelay;
            false,
                keepAlive;
            false,
                keepAliveInitialDelay;
            0,
                httpAllowHalfOpen;
            false,
                timeout;
            0,
                keepAliveTimeout;
            5000,
                maxHeadersCount;
            null,
                maxRequestsPerSocket;
            0,
                headersTimeout;
            60000,
                requestTimeout;
            0,
                _connectionKey;
            '6::::3000',
                [Symbol(IncomingMessage)];
            [Function, IncomingMessage],
                [Symbol(ServerResponse)];
            [Function, ServerResponse],
                [Symbol(kCapture)];
            false,
                [Symbol(async_id_symbol)];
            13;
        }
        parser: HTTPParser;
        {
            '0';
            [Function, bound, setRequestTimeout],
                '1';
            [Function, parserOnHeaders],
                '2';
            [Function, parserOnHeadersComplete],
                '3';
            [Function, parserOnBody],
                '4';
            [Function, parserOnMessageComplete],
                '5';
            [Function, bound, onParserExecute],
                '6';
            [Function, bound, onParserTimeout],
                _headers;
            [],
                _url;
            '',
                socket;
            [Circular * 1],
                incoming;
            [Circular * 2],
                outgoing;
            null,
                maxHeaderPairs;
            2000,
                _consumed;
            true,
                onIncoming;
            [Function, bound, parserOnIncoming],
                [Symbol(resource_symbol)];
            [HTTPServerAsyncResource];
        }
        on: [Function, socketListenerWrap],
            addListener;
        [Function, socketListenerWrap],
            prependListener;
        [Function, socketListenerWrap],
            setEncoding;
        [Function, socketSetEncoding],
            _paused;
        false,
            _httpMessage;
        ServerResponse;
        {
            _events: [Object, null, prototype],
                _eventsCount;
            1,
                _maxListeners;
            undefined,
                outputData;
            [],
                outputSize;
            0,
                writable;
            true,
                destroyed;
            false,
                _last;
            false,
                chunkedEncoding;
            false,
                shouldKeepAlive;
            true,
                maxRequestsOnConnectionReached;
            false,
                _defaultKeepAlive;
            true,
                useChunkedEncodingByDefault;
            true,
                sendDate;
            true,
                _removedConnection;
            false,
                _removedContLen;
            false,
                _removedTE;
            false,
                _contentLength;
            null,
                _hasBody;
            true,
                _trailer;
            '',
                finished;
            false,
                _headerSent;
            false,
                _closed;
            false,
                socket;
            [Circular * 1],
                _header;
            null,
                _keepAliveTimeout;
            5000,
                _onPendingData;
            [Function, bound, updateOutgoingData],
                req;
            [Circular * 2],
                _sent100;
            false,
                _expect_continue;
            false,
                locals;
            [Object, null, prototype];
            { }
            writeHead: [Function, writeHead],
                end;
            [Function, end],
                [Symbol(kCapture)];
            false,
                [Symbol(kNeedDrain)];
            false,
                [Symbol(corked)];
            0,
                [Symbol(kOutHeaders)];
            [Object, null, prototype];
        }
        timeout: 0,
            [Symbol(async_id_symbol)];
        225,
            [Symbol(kHandle)];
        TCP;
        {
            reading: true,
                onconnection;
            null,
                _consumed;
            true,
                [Symbol(owner_symbol)];
            [Circular * 1];
        }
        [Symbol(lastWriteQueueSize)];
        0,
            [Symbol(timeout)];
        Timeout;
        {
            _idleTimeout: -1,
                _idlePrev;
            null,
                _idleNext;
            null,
                _idleStart;
            5279,
                _onTimeout;
            null,
                _timerArgs;
            undefined,
                _repeat;
            null,
                _destroyed;
            true,
                [Symbol(refed)];
            false,
                [Symbol(kHasPrimitive)];
            false,
                [Symbol(asyncId)];
            1384,
                [Symbol(triggerId)];
            1380;
        }
        [Symbol(kBuffer)];
        null,
            [Symbol(kBufferCb)];
        null,
            [Symbol(kBufferGen)];
        null,
            [Symbol(kCapture)];
        false,
            [Symbol(kSetNoDelay)];
        false,
            [Symbol(kSetKeepAlive)];
        false,
            [Symbol(kSetKeepAliveInitialDelay)];
        0,
            [Symbol(kBytesRead)];
        0,
            [Symbol(kBytesWritten)];
        0,
            [Symbol(RequestTimeout)];
        undefined;
    }
    _consuming: false,
        _dumped;
    false,
        next;
    [Function, next],
        baseUrl;
    '',
        originalUrl;
    '/product/cart',
        _parsedUrl;
    Url;
    {
        protocol: null,
            slashes;
        null,
            auth;
        null,
            host;
        null,
            port;
        null,
            hostname;
        null,
            hash;
        null,
            search;
        null,
            query;
        null,
            pathname;
        '/product/cart',
            path;
        '/product/cart',
            href;
        '/product/cart',
            _raw;
        '/product/cart';
    }
    params: { }
    query: { }
    res:  * 3 > ServerResponse;
    {
        _events: [Object, null, prototype];
        {
            finish: [Function, bound, resOnFinish];
        }
        _eventsCount: 1,
            _maxListeners;
        undefined,
            outputData;
        [],
            outputSize;
        0,
            writable;
        true,
            destroyed;
        false,
            _last;
        false,
            chunkedEncoding;
        false,
            shouldKeepAlive;
        true,
            maxRequestsOnConnectionReached;
        false,
            _defaultKeepAlive;
        true,
            useChunkedEncodingByDefault;
        true,
            sendDate;
        true,
            _removedConnection;
        false,
            _removedContLen;
        false,
            _removedTE;
        false,
            _contentLength;
        null,
            _hasBody;
        true,
            _trailer;
        '',
            finished;
        false,
            _headerSent;
        false,
            _closed;
        false,
            socket;
         * 1 > Socket;
        {
            connecting: false,
                _hadError;
            false,
                _parent;
            null,
                _host;
            null,
                _readableState;
            [ReadableState],
                _events;
            [Object, null, prototype],
                _eventsCount;
            8,
                _maxListeners;
            undefined,
                _writableState;
            [WritableState],
                allowHalfOpen;
            true,
                _sockname;
            null,
                _pendingData;
            null,
                _pendingEncoding;
            '',
                server;
            [Server],
                _server;
            [Server],
                parser;
            [HTTPParser],
                on;
            [Function, socketListenerWrap],
                addListener;
            [Function, socketListenerWrap],
                prependListener;
            [Function, socketListenerWrap],
                setEncoding;
            [Function, socketSetEncoding],
                _paused;
            false,
                _httpMessage;
            [Circular * 3],
                timeout;
            0,
                [Symbol(async_id_symbol)];
            225,
                [Symbol(kHandle)];
            [TCP],
                [Symbol(lastWriteQueueSize)];
            0,
                [Symbol(timeout)];
            Timeout;
            {
                _idleTimeout: -1,
                    _idlePrev;
                null,
                    _idleNext;
                null,
                    _idleStart;
                5279,
                    _onTimeout;
                null,
                    _timerArgs;
                undefined,
                    _repeat;
                null,
                    _destroyed;
                true,
                    [Symbol(refed)];
                false,
                    [Symbol(kHasPrimitive)];
                false,
                    [Symbol(asyncId)];
                1384,
                    [Symbol(triggerId)];
                1380;
            }
            [Symbol(kBuffer)];
            null,
                [Symbol(kBufferCb)];
            null,
                [Symbol(kBufferGen)];
            null,
                [Symbol(kCapture)];
            false,
                [Symbol(kSetNoDelay)];
            false,
                [Symbol(kSetKeepAlive)];
            false,
                [Symbol(kSetKeepAliveInitialDelay)];
            0,
                [Symbol(kBytesRead)];
            0,
                [Symbol(kBytesWritten)];
            0,
                [Symbol(RequestTimeout)];
            undefined;
        }
        _header: null,
            _keepAliveTimeout;
        5000,
            _onPendingData;
        [Function, bound, updateOutgoingData],
            req;
        [Circular * 2],
            _sent100;
        false,
            _expect_continue;
        false,
            locals;
        [Object, null, prototype];
        { }
        writeHead: [Function, writeHead],
            end;
        [Function, end],
            [Symbol(kCapture)];
        false,
            [Symbol(kNeedDrain)];
        false,
            [Symbol(corked)];
        0,
            [Symbol(kOutHeaders)];
        [Object, null, prototype];
        {
            'x-powered-by';
            [Array];
        }
    }
    body: { }
    _parsedOriginalUrl: Url;
    {
        protocol: null,
            slashes;
        null,
            auth;
        null,
            host;
        null,
            port;
        null,
            hostname;
        null,
            hash;
        null,
            search;
        null,
            query;
        null,
            pathname;
        '/product/cart',
            path;
        '/product/cart',
            href;
        '/product/cart',
            _raw;
        '/product/cart';
    }
    sessionStore: MemoryStore;
    {
        _events: [Object, null, prototype];
        {
            disconnect: [Function, ondisconnect],
                connect;
            [Function, onconnect];
        }
        _eventsCount: 2,
            _maxListeners;
        undefined,
            sessions;
        [Object, null, prototype];
        {
            '7Vt2x6-hAGuokuTTN0sk2Ib1ISjPB3Tz';
            '{"cookie":{"originalMaxAge":3600000,"expires":"2022-09-28T06:03:19.251Z","httpOnly":true,"path":"/"}}';
        }
        generate: [Function(anonymous)],
            [Symbol(kCapture)];
        false;
    }
    sessionID: '7Vt2x6-hAGuokuTTN0sk2Ib1ISjPB3Tz',
        session;
    Session;
    {
        cookie: {
            path: '/',
                _expires;
            2022 - 09 - 28;
            T06: 03;
            19.251;
            Z,
                originalMaxAge;
            3600000,
                httpOnly;
            true;
        }
    }
    logIn: [Function(anonymous)],
        login;
    [Function(anonymous)],
        logOut;
    [Function(anonymous)],
        logout;
    [Function(anonymous)],
        isAuthenticated;
    [Function(anonymous)],
        isUnauthenticated;
    [Function(anonymous)],
        _sessionManager;
    SessionManager;
    {
        _key: 'passport',
            _serializeUser;
        [Function, bound];
    }
    _passport: {
        instance: Authenticator;
        {
            _key: 'passport',
                _strategies;
            [Object],
                _serializers;
            [Array],
                _deserializers;
            [Array],
                _infoTransformers;
            [],
                _framework;
            [Object],
                _sm;
            [SessionManager],
                Authenticator;
            [Function, Authenticator],
                Passport;
            [Function, Authenticator],
                Strategy;
            [Function],
                strategies;
            [Object],
                _userProperty;
            'user';
        }
    }
    route: Route;
    {
        path: '/product/cart',
            stack;
        [[Layer]],
            methods;
        {
            get: true;
        }
    }
    [Symbol(kCapture)];
    false,
        [Symbol(kHeaders)];
    {
        host: 'localhost:3000',
            connection;
        'keep-alive',
            'cache-control';
        'max-age=0',
            'sec-ch-ua';
        '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            'sec-ch-ua-mobile';
        '?0',
            'sec-ch-ua-platform';
        '"Windows"',
            'upgrade-insecure-requests';
        '1',
            'user-agent';
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            accept;
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-fetch-site';
        'none',
            'sec-fetch-mode';
        'navigate',
            'sec-fetch-user';
        '?1',
            'sec-fetch-dest';
        'document',
            'accept-encoding';
        'gzip, deflate, br',
            'accept-language';
        'en,vi;q=0.9,vi-VN;q=0.8',
            cookie;
        'Webstorm-2ab7ddf6=1d3612aa-cd63-4105-a7d0-bece08c41411; connect.sid=s%3A7Vt2x6-hAGuokuTTN0sk2Ib1ISjPB3Tz.Op%2FXQuglZytd7UOCL7o35uYZ51FRT2qeLLyJNrsDaBk',
            'if-none-match';
        'W/"d-R2eoxnyopImzswz1XDToC/GK5Ec"';
    }
    [Symbol(kHeadersCount)];
    34,
        [Symbol(kTrailers)];
    null,
        [Symbol(kTrailersCount)];
    0,
        [Symbol(RequestTimeout)];
    undefined;
}
//# sourceMappingURL=a.js.map