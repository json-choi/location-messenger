
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model locations
 * 
 */
export type locations = $Result.DefaultSelection<Prisma.$locationsPayload>
/**
 * Model friendships
 * 
 */
export type friendships = $Result.DefaultSelection<Prisma.$friendshipsPayload>
/**
 * Model groups
 * 
 */
export type groups = $Result.DefaultSelection<Prisma.$groupsPayload>
/**
 * Model group_members
 * 
 */
export type group_members = $Result.DefaultSelection<Prisma.$group_membersPayload>
/**
 * Model messages
 * 
 */
export type messages = $Result.DefaultSelection<Prisma.$messagesPayload>
/**
 * Model rooms
 * 
 */
export type rooms = $Result.DefaultSelection<Prisma.$roomsPayload>
/**
 * Model room_members
 * 
 */
export type room_members = $Result.DefaultSelection<Prisma.$room_membersPayload>
/**
 * Model room_messages
 * 
 */
export type room_messages = $Result.DefaultSelection<Prisma.$room_messagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FriendshipStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  BLOCKED: 'BLOCKED'
};

export type FriendshipStatus = (typeof FriendshipStatus)[keyof typeof FriendshipStatus]


export const MessageType: {
  TEXT: 'TEXT',
  LOCATION_SHARE: 'LOCATION_SHARE',
  SYSTEM: 'SYSTEM'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]

}

export type FriendshipStatus = $Enums.FriendshipStatus

export const FriendshipStatus: typeof $Enums.FriendshipStatus

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locations`: Exposes CRUD operations for the **locations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.locations.findMany()
    * ```
    */
  get locations(): Prisma.locationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendships`: Exposes CRUD operations for the **friendships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendships.findMany()
    * ```
    */
  get friendships(): Prisma.friendshipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groups`: Exposes CRUD operations for the **groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.groups.findMany()
    * ```
    */
  get groups(): Prisma.groupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group_members`: Exposes CRUD operations for the **group_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Group_members
    * const group_members = await prisma.group_members.findMany()
    * ```
    */
  get group_members(): Prisma.group_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rooms`: Exposes CRUD operations for the **rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.rooms.findMany()
    * ```
    */
  get rooms(): Prisma.roomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room_members`: Exposes CRUD operations for the **room_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Room_members
    * const room_members = await prisma.room_members.findMany()
    * ```
    */
  get room_members(): Prisma.room_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room_messages`: Exposes CRUD operations for the **room_messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Room_messages
    * const room_messages = await prisma.room_messages.findMany()
    * ```
    */
  get room_messages(): Prisma.room_messagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    locations: 'locations',
    friendships: 'friendships',
    groups: 'groups',
    group_members: 'group_members',
    messages: 'messages',
    rooms: 'rooms',
    room_members: 'room_members',
    room_messages: 'room_messages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "locations" | "friendships" | "groups" | "group_members" | "messages" | "rooms" | "room_members" | "room_messages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      locations: {
        payload: Prisma.$locationsPayload<ExtArgs>
        fields: Prisma.locationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.locationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.locationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          findFirst: {
            args: Prisma.locationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.locationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          findMany: {
            args: Prisma.locationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>[]
          }
          create: {
            args: Prisma.locationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          createMany: {
            args: Prisma.locationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.locationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>[]
          }
          delete: {
            args: Prisma.locationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          update: {
            args: Prisma.locationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          deleteMany: {
            args: Prisma.locationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.locationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.locationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>[]
          }
          upsert: {
            args: Prisma.locationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          aggregate: {
            args: Prisma.LocationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocations>
          }
          groupBy: {
            args: Prisma.locationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.locationsCountArgs<ExtArgs>
            result: $Utils.Optional<LocationsCountAggregateOutputType> | number
          }
        }
      }
      friendships: {
        payload: Prisma.$friendshipsPayload<ExtArgs>
        fields: Prisma.friendshipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.friendshipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.friendshipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          findFirst: {
            args: Prisma.friendshipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.friendshipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          findMany: {
            args: Prisma.friendshipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>[]
          }
          create: {
            args: Prisma.friendshipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          createMany: {
            args: Prisma.friendshipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.friendshipsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>[]
          }
          delete: {
            args: Prisma.friendshipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          update: {
            args: Prisma.friendshipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          deleteMany: {
            args: Prisma.friendshipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.friendshipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.friendshipsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>[]
          }
          upsert: {
            args: Prisma.friendshipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$friendshipsPayload>
          }
          aggregate: {
            args: Prisma.FriendshipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendships>
          }
          groupBy: {
            args: Prisma.friendshipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.friendshipsCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipsCountAggregateOutputType> | number
          }
        }
      }
      groups: {
        payload: Prisma.$groupsPayload<ExtArgs>
        fields: Prisma.groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findFirst: {
            args: Prisma.groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findMany: {
            args: Prisma.groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          create: {
            args: Prisma.groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          createMany: {
            args: Prisma.groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.groupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          delete: {
            args: Prisma.groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          update: {
            args: Prisma.groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          deleteMany: {
            args: Prisma.groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.groupsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          upsert: {
            args: Prisma.groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          aggregate: {
            args: Prisma.GroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroups>
          }
          groupBy: {
            args: Prisma.groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupsCountAggregateOutputType> | number
          }
        }
      }
      group_members: {
        payload: Prisma.$group_membersPayload<ExtArgs>
        fields: Prisma.group_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.group_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.group_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          findFirst: {
            args: Prisma.group_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.group_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          findMany: {
            args: Prisma.group_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>[]
          }
          create: {
            args: Prisma.group_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          createMany: {
            args: Prisma.group_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.group_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>[]
          }
          delete: {
            args: Prisma.group_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          update: {
            args: Prisma.group_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          deleteMany: {
            args: Prisma.group_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.group_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.group_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>[]
          }
          upsert: {
            args: Prisma.group_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_membersPayload>
          }
          aggregate: {
            args: Prisma.Group_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup_members>
          }
          groupBy: {
            args: Prisma.group_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Group_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.group_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Group_membersCountAggregateOutputType> | number
          }
        }
      }
      messages: {
        payload: Prisma.$messagesPayload<ExtArgs>
        fields: Prisma.messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findFirst: {
            args: Prisma.messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          findMany: {
            args: Prisma.messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          create: {
            args: Prisma.messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          createMany: {
            args: Prisma.messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          delete: {
            args: Prisma.messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          update: {
            args: Prisma.messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          deleteMany: {
            args: Prisma.messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>[]
          }
          upsert: {
            args: Prisma.messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      rooms: {
        payload: Prisma.$roomsPayload<ExtArgs>
        fields: Prisma.roomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          findFirst: {
            args: Prisma.roomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          findMany: {
            args: Prisma.roomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          create: {
            args: Prisma.roomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          createMany: {
            args: Prisma.roomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          delete: {
            args: Prisma.roomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          update: {
            args: Prisma.roomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          deleteMany: {
            args: Prisma.roomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          upsert: {
            args: Prisma.roomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          aggregate: {
            args: Prisma.RoomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRooms>
          }
          groupBy: {
            args: Prisma.roomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.roomsCountArgs<ExtArgs>
            result: $Utils.Optional<RoomsCountAggregateOutputType> | number
          }
        }
      }
      room_members: {
        payload: Prisma.$room_membersPayload<ExtArgs>
        fields: Prisma.room_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.room_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.room_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload>
          }
          findFirst: {
            args: Prisma.room_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.room_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload>
          }
          findMany: {
            args: Prisma.room_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload>[]
          }
          create: {
            args: Prisma.room_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload>
          }
          createMany: {
            args: Prisma.room_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.room_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload>[]
          }
          delete: {
            args: Prisma.room_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload>
          }
          update: {
            args: Prisma.room_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload>
          }
          deleteMany: {
            args: Prisma.room_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.room_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.room_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload>[]
          }
          upsert: {
            args: Prisma.room_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_membersPayload>
          }
          aggregate: {
            args: Prisma.Room_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom_members>
          }
          groupBy: {
            args: Prisma.room_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Room_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.room_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Room_membersCountAggregateOutputType> | number
          }
        }
      }
      room_messages: {
        payload: Prisma.$room_messagesPayload<ExtArgs>
        fields: Prisma.room_messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.room_messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.room_messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload>
          }
          findFirst: {
            args: Prisma.room_messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.room_messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload>
          }
          findMany: {
            args: Prisma.room_messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload>[]
          }
          create: {
            args: Prisma.room_messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload>
          }
          createMany: {
            args: Prisma.room_messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.room_messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload>[]
          }
          delete: {
            args: Prisma.room_messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload>
          }
          update: {
            args: Prisma.room_messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload>
          }
          deleteMany: {
            args: Prisma.room_messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.room_messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.room_messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload>[]
          }
          upsert: {
            args: Prisma.room_messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_messagesPayload>
          }
          aggregate: {
            args: Prisma.Room_messagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom_messages>
          }
          groupBy: {
            args: Prisma.room_messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Room_messagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.room_messagesCountArgs<ExtArgs>
            result: $Utils.Optional<Room_messagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    locations?: locationsOmit
    friendships?: friendshipsOmit
    groups?: groupsOmit
    group_members?: group_membersOmit
    messages?: messagesOmit
    rooms?: roomsOmit
    room_members?: room_membersOmit
    room_messages?: room_messagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    locations: number
    sentFriendships: number
    receivedFriendships: number
    groupMemberships: number
    createdGroups: number
    sentMessages: number
    receivedMessages: number
    roomMemberships: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | UsersCountOutputTypeCountLocationsArgs
    sentFriendships?: boolean | UsersCountOutputTypeCountSentFriendshipsArgs
    receivedFriendships?: boolean | UsersCountOutputTypeCountReceivedFriendshipsArgs
    groupMemberships?: boolean | UsersCountOutputTypeCountGroupMembershipsArgs
    createdGroups?: boolean | UsersCountOutputTypeCountCreatedGroupsArgs
    sentMessages?: boolean | UsersCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UsersCountOutputTypeCountReceivedMessagesArgs
    roomMemberships?: boolean | UsersCountOutputTypeCountRoomMembershipsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSentFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendshipsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReceivedFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendshipsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGroupMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_membersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCreatedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRoomMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_membersWhereInput
  }


  /**
   * Count Type GroupsCountOutputType
   */

  export type GroupsCountOutputType = {
    members: number
    messages: number
  }

  export type GroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupsCountOutputTypeCountMembersArgs
    messages?: boolean | GroupsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsCountOutputType
     */
    select?: GroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_membersWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
  }


  /**
   * Count Type RoomsCountOutputType
   */

  export type RoomsCountOutputType = {
    members: number
    messages: number
  }

  export type RoomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | RoomsCountOutputTypeCountMembersArgs
    messages?: boolean | RoomsCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomsCountOutputType
     */
    select?: RoomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_membersWhereInput
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_messagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    characterType: string | null
    characterColor: string | null
    locationSharingEnabled: boolean | null
    isAnonymous: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatar: string | null
    characterType: string | null
    characterColor: string | null
    locationSharingEnabled: boolean | null
    isAnonymous: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatar: number
    characterType: number
    characterColor: number
    locationSharingEnabled: number
    isAnonymous: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    characterType?: true
    characterColor?: true
    locationSharingEnabled?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    characterType?: true
    characterColor?: true
    locationSharingEnabled?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    characterType?: true
    characterColor?: true
    locationSharingEnabled?: true
    isAnonymous?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string | null
    name: string | null
    avatar: string | null
    characterType: string
    characterColor: string
    locationSharingEnabled: boolean
    isAnonymous: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    characterType?: boolean
    characterColor?: boolean
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locations?: boolean | users$locationsArgs<ExtArgs>
    sentFriendships?: boolean | users$sentFriendshipsArgs<ExtArgs>
    receivedFriendships?: boolean | users$receivedFriendshipsArgs<ExtArgs>
    groupMemberships?: boolean | users$groupMembershipsArgs<ExtArgs>
    createdGroups?: boolean | users$createdGroupsArgs<ExtArgs>
    sentMessages?: boolean | users$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | users$receivedMessagesArgs<ExtArgs>
    roomMemberships?: boolean | users$roomMembershipsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    characterType?: boolean
    characterColor?: boolean
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    characterType?: boolean
    characterColor?: boolean
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    characterType?: boolean
    characterColor?: boolean
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatar" | "characterType" | "characterColor" | "locationSharingEnabled" | "isAnonymous" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | users$locationsArgs<ExtArgs>
    sentFriendships?: boolean | users$sentFriendshipsArgs<ExtArgs>
    receivedFriendships?: boolean | users$receivedFriendshipsArgs<ExtArgs>
    groupMemberships?: boolean | users$groupMembershipsArgs<ExtArgs>
    createdGroups?: boolean | users$createdGroupsArgs<ExtArgs>
    sentMessages?: boolean | users$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | users$receivedMessagesArgs<ExtArgs>
    roomMemberships?: boolean | users$roomMembershipsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      locations: Prisma.$locationsPayload<ExtArgs>[]
      sentFriendships: Prisma.$friendshipsPayload<ExtArgs>[]
      receivedFriendships: Prisma.$friendshipsPayload<ExtArgs>[]
      groupMemberships: Prisma.$group_membersPayload<ExtArgs>[]
      createdGroups: Prisma.$groupsPayload<ExtArgs>[]
      sentMessages: Prisma.$messagesPayload<ExtArgs>[]
      receivedMessages: Prisma.$messagesPayload<ExtArgs>[]
      roomMemberships: Prisma.$room_membersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      name: string | null
      avatar: string | null
      characterType: string
      characterColor: string
      locationSharingEnabled: boolean
      isAnonymous: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locations<T extends users$locationsArgs<ExtArgs> = {}>(args?: Subset<T, users$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentFriendships<T extends users$sentFriendshipsArgs<ExtArgs> = {}>(args?: Subset<T, users$sentFriendshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedFriendships<T extends users$receivedFriendshipsArgs<ExtArgs> = {}>(args?: Subset<T, users$receivedFriendshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupMemberships<T extends users$groupMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, users$groupMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdGroups<T extends users$createdGroupsArgs<ExtArgs> = {}>(args?: Subset<T, users$createdGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends users$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, users$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends users$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, users$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomMemberships<T extends users$roomMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, users$roomMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly characterType: FieldRef<"users", 'String'>
    readonly characterColor: FieldRef<"users", 'String'>
    readonly locationSharingEnabled: FieldRef<"users", 'Boolean'>
    readonly isAnonymous: FieldRef<"users", 'Boolean'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.locations
   */
  export type users$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    where?: locationsWhereInput
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    cursor?: locationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * users.sentFriendships
   */
  export type users$sentFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    where?: friendshipsWhereInput
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    cursor?: friendshipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * users.receivedFriendships
   */
  export type users$receivedFriendshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    where?: friendshipsWhereInput
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    cursor?: friendshipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * users.groupMemberships
   */
  export type users$groupMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    where?: group_membersWhereInput
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    cursor?: group_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_membersScalarFieldEnum | Group_membersScalarFieldEnum[]
  }

  /**
   * users.createdGroups
   */
  export type users$createdGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    cursor?: groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * users.sentMessages
   */
  export type users$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * users.receivedMessages
   */
  export type users$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * users.roomMemberships
   */
  export type users$roomMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    where?: room_membersWhereInput
    orderBy?: room_membersOrderByWithRelationInput | room_membersOrderByWithRelationInput[]
    cursor?: room_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Room_membersScalarFieldEnum | Room_membersScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model locations
   */

  export type AggregateLocations = {
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  export type LocationsAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    accuracy: number | null
  }

  export type LocationsSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    accuracy: number | null
  }

  export type LocationsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    latitude: number | null
    longitude: number | null
    accuracy: number | null
    isActive: boolean | null
    timestamp: Date | null
  }

  export type LocationsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    latitude: number | null
    longitude: number | null
    accuracy: number | null
    isActive: boolean | null
    timestamp: Date | null
  }

  export type LocationsCountAggregateOutputType = {
    id: number
    userId: number
    latitude: number
    longitude: number
    accuracy: number
    isActive: number
    timestamp: number
    _all: number
  }


  export type LocationsAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    accuracy?: true
  }

  export type LocationsSumAggregateInputType = {
    latitude?: true
    longitude?: true
    accuracy?: true
  }

  export type LocationsMinAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    accuracy?: true
    isActive?: true
    timestamp?: true
  }

  export type LocationsMaxAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    accuracy?: true
    isActive?: true
    timestamp?: true
  }

  export type LocationsCountAggregateInputType = {
    id?: true
    userId?: true
    latitude?: true
    longitude?: true
    accuracy?: true
    isActive?: true
    timestamp?: true
    _all?: true
  }

  export type LocationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to aggregate.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned locations
    **/
    _count?: true | LocationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationsMaxAggregateInputType
  }

  export type GetLocationsAggregateType<T extends LocationsAggregateArgs> = {
        [P in keyof T & keyof AggregateLocations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocations[P]>
      : GetScalarType<T[P], AggregateLocations[P]>
  }




  export type locationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationsWhereInput
    orderBy?: locationsOrderByWithAggregationInput | locationsOrderByWithAggregationInput[]
    by: LocationsScalarFieldEnum[] | LocationsScalarFieldEnum
    having?: locationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationsCountAggregateInputType | true
    _avg?: LocationsAvgAggregateInputType
    _sum?: LocationsSumAggregateInputType
    _min?: LocationsMinAggregateInputType
    _max?: LocationsMaxAggregateInputType
  }

  export type LocationsGroupByOutputType = {
    id: string
    userId: string
    latitude: number
    longitude: number
    accuracy: number | null
    isActive: boolean
    timestamp: Date
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  type GetLocationsGroupByPayload<T extends locationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationsGroupByOutputType[P]>
            : GetScalarType<T[P], LocationsGroupByOutputType[P]>
        }
      >
    >


  export type locationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    accuracy?: boolean
    isActive?: boolean
    timestamp?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type locationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    accuracy?: boolean
    isActive?: boolean
    timestamp?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type locationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    accuracy?: boolean
    isActive?: boolean
    timestamp?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type locationsSelectScalar = {
    id?: boolean
    userId?: boolean
    latitude?: boolean
    longitude?: boolean
    accuracy?: boolean
    isActive?: boolean
    timestamp?: boolean
  }

  export type locationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "latitude" | "longitude" | "accuracy" | "isActive" | "timestamp", ExtArgs["result"]["locations"]>
  export type locationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type locationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type locationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $locationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "locations"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      latitude: number
      longitude: number
      accuracy: number | null
      isActive: boolean
      timestamp: Date
    }, ExtArgs["result"]["locations"]>
    composites: {}
  }

  type locationsGetPayload<S extends boolean | null | undefined | locationsDefaultArgs> = $Result.GetResult<Prisma.$locationsPayload, S>

  type locationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<locationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationsCountAggregateInputType | true
    }

  export interface locationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['locations'], meta: { name: 'locations' } }
    /**
     * Find zero or one Locations that matches the filter.
     * @param {locationsFindUniqueArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends locationsFindUniqueArgs>(args: SelectSubset<T, locationsFindUniqueArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {locationsFindUniqueOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends locationsFindUniqueOrThrowArgs>(args: SelectSubset<T, locationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsFindFirstArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends locationsFindFirstArgs>(args?: SelectSubset<T, locationsFindFirstArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsFindFirstOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends locationsFindFirstOrThrowArgs>(args?: SelectSubset<T, locationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.locations.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.locations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationsWithIdOnly = await prisma.locations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends locationsFindManyArgs>(args?: SelectSubset<T, locationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locations.
     * @param {locationsCreateArgs} args - Arguments to create a Locations.
     * @example
     * // Create one Locations
     * const Locations = await prisma.locations.create({
     *   data: {
     *     // ... data to create a Locations
     *   }
     * })
     * 
     */
    create<T extends locationsCreateArgs>(args: SelectSubset<T, locationsCreateArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {locationsCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends locationsCreateManyArgs>(args?: SelectSubset<T, locationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {locationsCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationsWithIdOnly = await prisma.locations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends locationsCreateManyAndReturnArgs>(args?: SelectSubset<T, locationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locations.
     * @param {locationsDeleteArgs} args - Arguments to delete one Locations.
     * @example
     * // Delete one Locations
     * const Locations = await prisma.locations.delete({
     *   where: {
     *     // ... filter to delete one Locations
     *   }
     * })
     * 
     */
    delete<T extends locationsDeleteArgs>(args: SelectSubset<T, locationsDeleteArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locations.
     * @param {locationsUpdateArgs} args - Arguments to update one Locations.
     * @example
     * // Update one Locations
     * const locations = await prisma.locations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends locationsUpdateArgs>(args: SelectSubset<T, locationsUpdateArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {locationsDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.locations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends locationsDeleteManyArgs>(args?: SelectSubset<T, locationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends locationsUpdateManyArgs>(args: SelectSubset<T, locationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {locationsUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationsWithIdOnly = await prisma.locations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends locationsUpdateManyAndReturnArgs>(args: SelectSubset<T, locationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locations.
     * @param {locationsUpsertArgs} args - Arguments to update or create a Locations.
     * @example
     * // Update or create a Locations
     * const locations = await prisma.locations.upsert({
     *   create: {
     *     // ... data to create a Locations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locations we want to update
     *   }
     * })
     */
    upsert<T extends locationsUpsertArgs>(args: SelectSubset<T, locationsUpsertArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.locations.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends locationsCountArgs>(
      args?: Subset<T, locationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationsAggregateArgs>(args: Subset<T, LocationsAggregateArgs>): Prisma.PrismaPromise<GetLocationsAggregateType<T>>

    /**
     * Group by Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends locationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: locationsGroupByArgs['orderBy'] }
        : { orderBy?: locationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, locationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the locations model
   */
  readonly fields: locationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for locations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__locationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the locations model
   */
  interface locationsFieldRefs {
    readonly id: FieldRef<"locations", 'String'>
    readonly userId: FieldRef<"locations", 'String'>
    readonly latitude: FieldRef<"locations", 'Float'>
    readonly longitude: FieldRef<"locations", 'Float'>
    readonly accuracy: FieldRef<"locations", 'Float'>
    readonly isActive: FieldRef<"locations", 'Boolean'>
    readonly timestamp: FieldRef<"locations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * locations findUnique
   */
  export type locationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations findUniqueOrThrow
   */
  export type locationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations findFirst
   */
  export type locationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * locations findFirstOrThrow
   */
  export type locationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * locations findMany
   */
  export type locationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing locations.
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * locations create
   */
  export type locationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * The data needed to create a locations.
     */
    data: XOR<locationsCreateInput, locationsUncheckedCreateInput>
  }

  /**
   * locations createMany
   */
  export type locationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many locations.
     */
    data: locationsCreateManyInput | locationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * locations createManyAndReturn
   */
  export type locationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * The data used to create many locations.
     */
    data: locationsCreateManyInput | locationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * locations update
   */
  export type locationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * The data needed to update a locations.
     */
    data: XOR<locationsUpdateInput, locationsUncheckedUpdateInput>
    /**
     * Choose, which locations to update.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations updateMany
   */
  export type locationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update locations.
     */
    data: XOR<locationsUpdateManyMutationInput, locationsUncheckedUpdateManyInput>
    /**
     * Filter which locations to update
     */
    where?: locationsWhereInput
    /**
     * Limit how many locations to update.
     */
    limit?: number
  }

  /**
   * locations updateManyAndReturn
   */
  export type locationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * The data used to update locations.
     */
    data: XOR<locationsUpdateManyMutationInput, locationsUncheckedUpdateManyInput>
    /**
     * Filter which locations to update
     */
    where?: locationsWhereInput
    /**
     * Limit how many locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * locations upsert
   */
  export type locationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * The filter to search for the locations to update in case it exists.
     */
    where: locationsWhereUniqueInput
    /**
     * In case the locations found by the `where` argument doesn't exist, create a new locations with this data.
     */
    create: XOR<locationsCreateInput, locationsUncheckedCreateInput>
    /**
     * In case the locations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<locationsUpdateInput, locationsUncheckedUpdateInput>
  }

  /**
   * locations delete
   */
  export type locationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter which locations to delete.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations deleteMany
   */
  export type locationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to delete
     */
    where?: locationsWhereInput
    /**
     * Limit how many locations to delete.
     */
    limit?: number
  }

  /**
   * locations without action
   */
  export type locationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
  }


  /**
   * Model friendships
   */

  export type AggregateFriendships = {
    _count: FriendshipsCountAggregateOutputType | null
    _min: FriendshipsMinAggregateOutputType | null
    _max: FriendshipsMaxAggregateOutputType | null
  }

  export type FriendshipsMinAggregateOutputType = {
    id: string | null
    requesterId: string | null
    addresseeId: string | null
    status: $Enums.FriendshipStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendshipsMaxAggregateOutputType = {
    id: string | null
    requesterId: string | null
    addresseeId: string | null
    status: $Enums.FriendshipStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendshipsCountAggregateOutputType = {
    id: number
    requesterId: number
    addresseeId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FriendshipsMinAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendshipsMaxAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendshipsCountAggregateInputType = {
    id?: true
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FriendshipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friendships to aggregate.
     */
    where?: friendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: friendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned friendships
    **/
    _count?: true | FriendshipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipsMaxAggregateInputType
  }

  export type GetFriendshipsAggregateType<T extends FriendshipsAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendships[P]>
      : GetScalarType<T[P], AggregateFriendships[P]>
  }




  export type friendshipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: friendshipsWhereInput
    orderBy?: friendshipsOrderByWithAggregationInput | friendshipsOrderByWithAggregationInput[]
    by: FriendshipsScalarFieldEnum[] | FriendshipsScalarFieldEnum
    having?: friendshipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipsCountAggregateInputType | true
    _min?: FriendshipsMinAggregateInputType
    _max?: FriendshipsMaxAggregateInputType
  }

  export type FriendshipsGroupByOutputType = {
    id: string
    requesterId: string
    addresseeId: string
    status: $Enums.FriendshipStatus
    createdAt: Date
    updatedAt: Date
    _count: FriendshipsCountAggregateOutputType | null
    _min: FriendshipsMinAggregateOutputType | null
    _max: FriendshipsMaxAggregateOutputType | null
  }

  type GetFriendshipsGroupByPayload<T extends friendshipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipsGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipsGroupByOutputType[P]>
        }
      >
    >


  export type friendshipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requester?: boolean | usersDefaultArgs<ExtArgs>
    addressee?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendships"]>

  export type friendshipsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requester?: boolean | usersDefaultArgs<ExtArgs>
    addressee?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendships"]>

  export type friendshipsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requester?: boolean | usersDefaultArgs<ExtArgs>
    addressee?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendships"]>

  export type friendshipsSelectScalar = {
    id?: boolean
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type friendshipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterId" | "addresseeId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["friendships"]>
  export type friendshipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | usersDefaultArgs<ExtArgs>
    addressee?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type friendshipsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | usersDefaultArgs<ExtArgs>
    addressee?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type friendshipsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | usersDefaultArgs<ExtArgs>
    addressee?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $friendshipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "friendships"
    objects: {
      requester: Prisma.$usersPayload<ExtArgs>
      addressee: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requesterId: string
      addresseeId: string
      status: $Enums.FriendshipStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["friendships"]>
    composites: {}
  }

  type friendshipsGetPayload<S extends boolean | null | undefined | friendshipsDefaultArgs> = $Result.GetResult<Prisma.$friendshipsPayload, S>

  type friendshipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<friendshipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipsCountAggregateInputType | true
    }

  export interface friendshipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['friendships'], meta: { name: 'friendships' } }
    /**
     * Find zero or one Friendships that matches the filter.
     * @param {friendshipsFindUniqueArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends friendshipsFindUniqueArgs>(args: SelectSubset<T, friendshipsFindUniqueArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendships that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {friendshipsFindUniqueOrThrowArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends friendshipsFindUniqueOrThrowArgs>(args: SelectSubset<T, friendshipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsFindFirstArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends friendshipsFindFirstArgs>(args?: SelectSubset<T, friendshipsFindFirstArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsFindFirstOrThrowArgs} args - Arguments to find a Friendships
     * @example
     * // Get one Friendships
     * const friendships = await prisma.friendships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends friendshipsFindFirstOrThrowArgs>(args?: SelectSubset<T, friendshipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendships.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipsWithIdOnly = await prisma.friendships.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends friendshipsFindManyArgs>(args?: SelectSubset<T, friendshipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendships.
     * @param {friendshipsCreateArgs} args - Arguments to create a Friendships.
     * @example
     * // Create one Friendships
     * const Friendships = await prisma.friendships.create({
     *   data: {
     *     // ... data to create a Friendships
     *   }
     * })
     * 
     */
    create<T extends friendshipsCreateArgs>(args: SelectSubset<T, friendshipsCreateArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {friendshipsCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendships = await prisma.friendships.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends friendshipsCreateManyArgs>(args?: SelectSubset<T, friendshipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {friendshipsCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendships = await prisma.friendships.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipsWithIdOnly = await prisma.friendships.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends friendshipsCreateManyAndReturnArgs>(args?: SelectSubset<T, friendshipsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendships.
     * @param {friendshipsDeleteArgs} args - Arguments to delete one Friendships.
     * @example
     * // Delete one Friendships
     * const Friendships = await prisma.friendships.delete({
     *   where: {
     *     // ... filter to delete one Friendships
     *   }
     * })
     * 
     */
    delete<T extends friendshipsDeleteArgs>(args: SelectSubset<T, friendshipsDeleteArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendships.
     * @param {friendshipsUpdateArgs} args - Arguments to update one Friendships.
     * @example
     * // Update one Friendships
     * const friendships = await prisma.friendships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends friendshipsUpdateArgs>(args: SelectSubset<T, friendshipsUpdateArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {friendshipsDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends friendshipsDeleteManyArgs>(args?: SelectSubset<T, friendshipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendships = await prisma.friendships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends friendshipsUpdateManyArgs>(args: SelectSubset<T, friendshipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {friendshipsUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendships = await prisma.friendships.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipsWithIdOnly = await prisma.friendships.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends friendshipsUpdateManyAndReturnArgs>(args: SelectSubset<T, friendshipsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendships.
     * @param {friendshipsUpsertArgs} args - Arguments to update or create a Friendships.
     * @example
     * // Update or create a Friendships
     * const friendships = await prisma.friendships.upsert({
     *   create: {
     *     // ... data to create a Friendships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendships we want to update
     *   }
     * })
     */
    upsert<T extends friendshipsUpsertArgs>(args: SelectSubset<T, friendshipsUpsertArgs<ExtArgs>>): Prisma__friendshipsClient<$Result.GetResult<Prisma.$friendshipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendships.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends friendshipsCountArgs>(
      args?: Subset<T, friendshipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipsAggregateArgs>(args: Subset<T, FriendshipsAggregateArgs>): Prisma.PrismaPromise<GetFriendshipsAggregateType<T>>

    /**
     * Group by Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {friendshipsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends friendshipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: friendshipsGroupByArgs['orderBy'] }
        : { orderBy?: friendshipsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, friendshipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the friendships model
   */
  readonly fields: friendshipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for friendships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__friendshipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addressee<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the friendships model
   */
  interface friendshipsFieldRefs {
    readonly id: FieldRef<"friendships", 'String'>
    readonly requesterId: FieldRef<"friendships", 'String'>
    readonly addresseeId: FieldRef<"friendships", 'String'>
    readonly status: FieldRef<"friendships", 'FriendshipStatus'>
    readonly createdAt: FieldRef<"friendships", 'DateTime'>
    readonly updatedAt: FieldRef<"friendships", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * friendships findUnique
   */
  export type friendshipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where: friendshipsWhereUniqueInput
  }

  /**
   * friendships findUniqueOrThrow
   */
  export type friendshipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where: friendshipsWhereUniqueInput
  }

  /**
   * friendships findFirst
   */
  export type friendshipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where?: friendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friendships.
     */
    cursor?: friendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friendships.
     */
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * friendships findFirstOrThrow
   */
  export type friendshipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where?: friendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for friendships.
     */
    cursor?: friendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of friendships.
     */
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * friendships findMany
   */
  export type friendshipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter, which friendships to fetch.
     */
    where?: friendshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of friendships to fetch.
     */
    orderBy?: friendshipsOrderByWithRelationInput | friendshipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing friendships.
     */
    cursor?: friendshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` friendships.
     */
    skip?: number
    distinct?: FriendshipsScalarFieldEnum | FriendshipsScalarFieldEnum[]
  }

  /**
   * friendships create
   */
  export type friendshipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * The data needed to create a friendships.
     */
    data: XOR<friendshipsCreateInput, friendshipsUncheckedCreateInput>
  }

  /**
   * friendships createMany
   */
  export type friendshipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many friendships.
     */
    data: friendshipsCreateManyInput | friendshipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * friendships createManyAndReturn
   */
  export type friendshipsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * The data used to create many friendships.
     */
    data: friendshipsCreateManyInput | friendshipsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * friendships update
   */
  export type friendshipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * The data needed to update a friendships.
     */
    data: XOR<friendshipsUpdateInput, friendshipsUncheckedUpdateInput>
    /**
     * Choose, which friendships to update.
     */
    where: friendshipsWhereUniqueInput
  }

  /**
   * friendships updateMany
   */
  export type friendshipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update friendships.
     */
    data: XOR<friendshipsUpdateManyMutationInput, friendshipsUncheckedUpdateManyInput>
    /**
     * Filter which friendships to update
     */
    where?: friendshipsWhereInput
    /**
     * Limit how many friendships to update.
     */
    limit?: number
  }

  /**
   * friendships updateManyAndReturn
   */
  export type friendshipsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * The data used to update friendships.
     */
    data: XOR<friendshipsUpdateManyMutationInput, friendshipsUncheckedUpdateManyInput>
    /**
     * Filter which friendships to update
     */
    where?: friendshipsWhereInput
    /**
     * Limit how many friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * friendships upsert
   */
  export type friendshipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * The filter to search for the friendships to update in case it exists.
     */
    where: friendshipsWhereUniqueInput
    /**
     * In case the friendships found by the `where` argument doesn't exist, create a new friendships with this data.
     */
    create: XOR<friendshipsCreateInput, friendshipsUncheckedCreateInput>
    /**
     * In case the friendships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<friendshipsUpdateInput, friendshipsUncheckedUpdateInput>
  }

  /**
   * friendships delete
   */
  export type friendshipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
    /**
     * Filter which friendships to delete.
     */
    where: friendshipsWhereUniqueInput
  }

  /**
   * friendships deleteMany
   */
  export type friendshipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which friendships to delete
     */
    where?: friendshipsWhereInput
    /**
     * Limit how many friendships to delete.
     */
    limit?: number
  }

  /**
   * friendships without action
   */
  export type friendshipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the friendships
     */
    select?: friendshipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the friendships
     */
    omit?: friendshipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: friendshipsInclude<ExtArgs> | null
  }


  /**
   * Model groups
   */

  export type AggregateGroups = {
    _count: GroupsCountAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  export type GroupsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to aggregate.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groups
    **/
    _count?: true | GroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsMaxAggregateInputType
  }

  export type GetGroupsAggregateType<T extends GroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroups[P]>
      : GetScalarType<T[P], AggregateGroups[P]>
  }




  export type groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithAggregationInput | groupsOrderByWithAggregationInput[]
    by: GroupsScalarFieldEnum[] | GroupsScalarFieldEnum
    having?: groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsCountAggregateInputType | true
    _min?: GroupsMinAggregateInputType
    _max?: GroupsMaxAggregateInputType
  }

  export type GroupsGroupByOutputType = {
    id: string
    name: string
    description: string | null
    creatorId: string
    createdAt: Date
    updatedAt: Date
    _count: GroupsCountAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  type GetGroupsGroupByPayload<T extends groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupsGroupByOutputType[P]>
        }
      >
    >


  export type groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | usersDefaultArgs<ExtArgs>
    members?: boolean | groups$membersArgs<ExtArgs>
    messages?: boolean | groups$messagesArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type groupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["groups"]>
  export type groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | usersDefaultArgs<ExtArgs>
    members?: boolean | groups$membersArgs<ExtArgs>
    messages?: boolean | groups$messagesArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type groupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type groupsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "groups"
    objects: {
      creator: Prisma.$usersPayload<ExtArgs>
      members: Prisma.$group_membersPayload<ExtArgs>[]
      messages: Prisma.$messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      creatorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groups"]>
    composites: {}
  }

  type groupsGetPayload<S extends boolean | null | undefined | groupsDefaultArgs> = $Result.GetResult<Prisma.$groupsPayload, S>

  type groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupsCountAggregateInputType | true
    }

  export interface groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['groups'], meta: { name: 'groups' } }
    /**
     * Find zero or one Groups that matches the filter.
     * @param {groupsFindUniqueArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends groupsFindUniqueArgs>(args: SelectSubset<T, groupsFindUniqueArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {groupsFindUniqueOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends groupsFindFirstArgs>(args?: SelectSubset<T, groupsFindFirstArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.groups.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupsWithIdOnly = await prisma.groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends groupsFindManyArgs>(args?: SelectSubset<T, groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groups.
     * @param {groupsCreateArgs} args - Arguments to create a Groups.
     * @example
     * // Create one Groups
     * const Groups = await prisma.groups.create({
     *   data: {
     *     // ... data to create a Groups
     *   }
     * })
     * 
     */
    create<T extends groupsCreateArgs>(args: SelectSubset<T, groupsCreateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {groupsCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends groupsCreateManyArgs>(args?: SelectSubset<T, groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {groupsCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends groupsCreateManyAndReturnArgs>(args?: SelectSubset<T, groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Groups.
     * @param {groupsDeleteArgs} args - Arguments to delete one Groups.
     * @example
     * // Delete one Groups
     * const Groups = await prisma.groups.delete({
     *   where: {
     *     // ... filter to delete one Groups
     *   }
     * })
     * 
     */
    delete<T extends groupsDeleteArgs>(args: SelectSubset<T, groupsDeleteArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groups.
     * @param {groupsUpdateArgs} args - Arguments to update one Groups.
     * @example
     * // Update one Groups
     * const groups = await prisma.groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends groupsUpdateArgs>(args: SelectSubset<T, groupsUpdateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {groupsDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends groupsDeleteManyArgs>(args?: SelectSubset<T, groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends groupsUpdateManyArgs>(args: SelectSubset<T, groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {groupsUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends groupsUpdateManyAndReturnArgs>(args: SelectSubset<T, groupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Groups.
     * @param {groupsUpsertArgs} args - Arguments to update or create a Groups.
     * @example
     * // Update or create a Groups
     * const groups = await prisma.groups.upsert({
     *   create: {
     *     // ... data to create a Groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groups we want to update
     *   }
     * })
     */
    upsert<T extends groupsUpsertArgs>(args: SelectSubset<T, groupsUpsertArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.groups.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends groupsCountArgs>(
      args?: Subset<T, groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupsAggregateArgs>(args: Subset<T, GroupsAggregateArgs>): Prisma.PrismaPromise<GetGroupsAggregateType<T>>

    /**
     * Group by Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupsGroupByArgs['orderBy'] }
        : { orderBy?: groupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the groups model
   */
  readonly fields: groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends groups$membersArgs<ExtArgs> = {}>(args?: Subset<T, groups$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends groups$messagesArgs<ExtArgs> = {}>(args?: Subset<T, groups$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the groups model
   */
  interface groupsFieldRefs {
    readonly id: FieldRef<"groups", 'String'>
    readonly name: FieldRef<"groups", 'String'>
    readonly description: FieldRef<"groups", 'String'>
    readonly creatorId: FieldRef<"groups", 'String'>
    readonly createdAt: FieldRef<"groups", 'DateTime'>
    readonly updatedAt: FieldRef<"groups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * groups findUnique
   */
  export type groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findUniqueOrThrow
   */
  export type groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findFirst
   */
  export type groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findFirstOrThrow
   */
  export type groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findMany
   */
  export type groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups create
   */
  export type groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a groups.
     */
    data: XOR<groupsCreateInput, groupsUncheckedCreateInput>
  }

  /**
   * groups createMany
   */
  export type groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * groups createManyAndReturn
   */
  export type groupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * groups update
   */
  export type groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a groups.
     */
    data: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
    /**
     * Choose, which groups to update.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups updateMany
   */
  export type groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
  }

  /**
   * groups updateManyAndReturn
   */
  export type groupsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * groups upsert
   */
  export type groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the groups to update in case it exists.
     */
    where: groupsWhereUniqueInput
    /**
     * In case the groups found by the `where` argument doesn't exist, create a new groups with this data.
     */
    create: XOR<groupsCreateInput, groupsUncheckedCreateInput>
    /**
     * In case the groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
  }

  /**
   * groups delete
   */
  export type groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter which groups to delete.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups deleteMany
   */
  export type groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to delete
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to delete.
     */
    limit?: number
  }

  /**
   * groups.members
   */
  export type groups$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    where?: group_membersWhereInput
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    cursor?: group_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_membersScalarFieldEnum | Group_membersScalarFieldEnum[]
  }

  /**
   * groups.messages
   */
  export type groups$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    cursor?: messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * groups without action
   */
  export type groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
  }


  /**
   * Model group_members
   */

  export type AggregateGroup_members = {
    _count: Group_membersCountAggregateOutputType | null
    _min: Group_membersMinAggregateOutputType | null
    _max: Group_membersMaxAggregateOutputType | null
  }

  export type Group_membersMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    joinedAt: Date | null
  }

  export type Group_membersMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    joinedAt: Date | null
  }

  export type Group_membersCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type Group_membersMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
  }

  export type Group_membersMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
  }

  export type Group_membersCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type Group_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_members to aggregate.
     */
    where?: group_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: group_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned group_members
    **/
    _count?: true | Group_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Group_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Group_membersMaxAggregateInputType
  }

  export type GetGroup_membersAggregateType<T extends Group_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup_members[P]>
      : GetScalarType<T[P], AggregateGroup_members[P]>
  }




  export type group_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_membersWhereInput
    orderBy?: group_membersOrderByWithAggregationInput | group_membersOrderByWithAggregationInput[]
    by: Group_membersScalarFieldEnum[] | Group_membersScalarFieldEnum
    having?: group_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Group_membersCountAggregateInputType | true
    _min?: Group_membersMinAggregateInputType
    _max?: Group_membersMaxAggregateInputType
  }

  export type Group_membersGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    joinedAt: Date
    _count: Group_membersCountAggregateOutputType | null
    _min: Group_membersMinAggregateOutputType | null
    _max: Group_membersMaxAggregateOutputType | null
  }

  type GetGroup_membersGroupByPayload<T extends group_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Group_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Group_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Group_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Group_membersGroupByOutputType[P]>
        }
      >
    >


  export type group_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_members"]>

  export type group_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_members"]>

  export type group_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_members"]>

  export type group_membersSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    joinedAt?: boolean
  }

  export type group_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "joinedAt", ExtArgs["result"]["group_members"]>
  export type group_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type group_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type group_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $group_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "group_members"
    objects: {
      group: Prisma.$groupsPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      joinedAt: Date
    }, ExtArgs["result"]["group_members"]>
    composites: {}
  }

  type group_membersGetPayload<S extends boolean | null | undefined | group_membersDefaultArgs> = $Result.GetResult<Prisma.$group_membersPayload, S>

  type group_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<group_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Group_membersCountAggregateInputType | true
    }

  export interface group_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group_members'], meta: { name: 'group_members' } }
    /**
     * Find zero or one Group_members that matches the filter.
     * @param {group_membersFindUniqueArgs} args - Arguments to find a Group_members
     * @example
     * // Get one Group_members
     * const group_members = await prisma.group_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends group_membersFindUniqueArgs>(args: SelectSubset<T, group_membersFindUniqueArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {group_membersFindUniqueOrThrowArgs} args - Arguments to find a Group_members
     * @example
     * // Get one Group_members
     * const group_members = await prisma.group_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends group_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, group_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersFindFirstArgs} args - Arguments to find a Group_members
     * @example
     * // Get one Group_members
     * const group_members = await prisma.group_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends group_membersFindFirstArgs>(args?: SelectSubset<T, group_membersFindFirstArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersFindFirstOrThrowArgs} args - Arguments to find a Group_members
     * @example
     * // Get one Group_members
     * const group_members = await prisma.group_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends group_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, group_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Group_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Group_members
     * const group_members = await prisma.group_members.findMany()
     * 
     * // Get first 10 Group_members
     * const group_members = await prisma.group_members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const group_membersWithIdOnly = await prisma.group_members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends group_membersFindManyArgs>(args?: SelectSubset<T, group_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group_members.
     * @param {group_membersCreateArgs} args - Arguments to create a Group_members.
     * @example
     * // Create one Group_members
     * const Group_members = await prisma.group_members.create({
     *   data: {
     *     // ... data to create a Group_members
     *   }
     * })
     * 
     */
    create<T extends group_membersCreateArgs>(args: SelectSubset<T, group_membersCreateArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Group_members.
     * @param {group_membersCreateManyArgs} args - Arguments to create many Group_members.
     * @example
     * // Create many Group_members
     * const group_members = await prisma.group_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends group_membersCreateManyArgs>(args?: SelectSubset<T, group_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Group_members and returns the data saved in the database.
     * @param {group_membersCreateManyAndReturnArgs} args - Arguments to create many Group_members.
     * @example
     * // Create many Group_members
     * const group_members = await prisma.group_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Group_members and only return the `id`
     * const group_membersWithIdOnly = await prisma.group_members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends group_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, group_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group_members.
     * @param {group_membersDeleteArgs} args - Arguments to delete one Group_members.
     * @example
     * // Delete one Group_members
     * const Group_members = await prisma.group_members.delete({
     *   where: {
     *     // ... filter to delete one Group_members
     *   }
     * })
     * 
     */
    delete<T extends group_membersDeleteArgs>(args: SelectSubset<T, group_membersDeleteArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group_members.
     * @param {group_membersUpdateArgs} args - Arguments to update one Group_members.
     * @example
     * // Update one Group_members
     * const group_members = await prisma.group_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends group_membersUpdateArgs>(args: SelectSubset<T, group_membersUpdateArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Group_members.
     * @param {group_membersDeleteManyArgs} args - Arguments to filter Group_members to delete.
     * @example
     * // Delete a few Group_members
     * const { count } = await prisma.group_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends group_membersDeleteManyArgs>(args?: SelectSubset<T, group_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Group_members
     * const group_members = await prisma.group_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends group_membersUpdateManyArgs>(args: SelectSubset<T, group_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_members and returns the data updated in the database.
     * @param {group_membersUpdateManyAndReturnArgs} args - Arguments to update many Group_members.
     * @example
     * // Update many Group_members
     * const group_members = await prisma.group_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Group_members and only return the `id`
     * const group_membersWithIdOnly = await prisma.group_members.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends group_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, group_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group_members.
     * @param {group_membersUpsertArgs} args - Arguments to update or create a Group_members.
     * @example
     * // Update or create a Group_members
     * const group_members = await prisma.group_members.upsert({
     *   create: {
     *     // ... data to create a Group_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group_members we want to update
     *   }
     * })
     */
    upsert<T extends group_membersUpsertArgs>(args: SelectSubset<T, group_membersUpsertArgs<ExtArgs>>): Prisma__group_membersClient<$Result.GetResult<Prisma.$group_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Group_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersCountArgs} args - Arguments to filter Group_members to count.
     * @example
     * // Count the number of Group_members
     * const count = await prisma.group_members.count({
     *   where: {
     *     // ... the filter for the Group_members we want to count
     *   }
     * })
    **/
    count<T extends group_membersCountArgs>(
      args?: Subset<T, group_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Group_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Group_membersAggregateArgs>(args: Subset<T, Group_membersAggregateArgs>): Prisma.PrismaPromise<GetGroup_membersAggregateType<T>>

    /**
     * Group by Group_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_membersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends group_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: group_membersGroupByArgs['orderBy'] }
        : { orderBy?: group_membersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, group_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroup_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the group_members model
   */
  readonly fields: group_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__group_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the group_members model
   */
  interface group_membersFieldRefs {
    readonly id: FieldRef<"group_members", 'String'>
    readonly groupId: FieldRef<"group_members", 'String'>
    readonly userId: FieldRef<"group_members", 'String'>
    readonly joinedAt: FieldRef<"group_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * group_members findUnique
   */
  export type group_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter, which group_members to fetch.
     */
    where: group_membersWhereUniqueInput
  }

  /**
   * group_members findUniqueOrThrow
   */
  export type group_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter, which group_members to fetch.
     */
    where: group_membersWhereUniqueInput
  }

  /**
   * group_members findFirst
   */
  export type group_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter, which group_members to fetch.
     */
    where?: group_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_members.
     */
    cursor?: group_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_members.
     */
    distinct?: Group_membersScalarFieldEnum | Group_membersScalarFieldEnum[]
  }

  /**
   * group_members findFirstOrThrow
   */
  export type group_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter, which group_members to fetch.
     */
    where?: group_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_members.
     */
    cursor?: group_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_members.
     */
    distinct?: Group_membersScalarFieldEnum | Group_membersScalarFieldEnum[]
  }

  /**
   * group_members findMany
   */
  export type group_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter, which group_members to fetch.
     */
    where?: group_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_members to fetch.
     */
    orderBy?: group_membersOrderByWithRelationInput | group_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing group_members.
     */
    cursor?: group_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_members.
     */
    skip?: number
    distinct?: Group_membersScalarFieldEnum | Group_membersScalarFieldEnum[]
  }

  /**
   * group_members create
   */
  export type group_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a group_members.
     */
    data: XOR<group_membersCreateInput, group_membersUncheckedCreateInput>
  }

  /**
   * group_members createMany
   */
  export type group_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many group_members.
     */
    data: group_membersCreateManyInput | group_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * group_members createManyAndReturn
   */
  export type group_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * The data used to create many group_members.
     */
    data: group_membersCreateManyInput | group_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * group_members update
   */
  export type group_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a group_members.
     */
    data: XOR<group_membersUpdateInput, group_membersUncheckedUpdateInput>
    /**
     * Choose, which group_members to update.
     */
    where: group_membersWhereUniqueInput
  }

  /**
   * group_members updateMany
   */
  export type group_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update group_members.
     */
    data: XOR<group_membersUpdateManyMutationInput, group_membersUncheckedUpdateManyInput>
    /**
     * Filter which group_members to update
     */
    where?: group_membersWhereInput
    /**
     * Limit how many group_members to update.
     */
    limit?: number
  }

  /**
   * group_members updateManyAndReturn
   */
  export type group_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * The data used to update group_members.
     */
    data: XOR<group_membersUpdateManyMutationInput, group_membersUncheckedUpdateManyInput>
    /**
     * Filter which group_members to update
     */
    where?: group_membersWhereInput
    /**
     * Limit how many group_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * group_members upsert
   */
  export type group_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the group_members to update in case it exists.
     */
    where: group_membersWhereUniqueInput
    /**
     * In case the group_members found by the `where` argument doesn't exist, create a new group_members with this data.
     */
    create: XOR<group_membersCreateInput, group_membersUncheckedCreateInput>
    /**
     * In case the group_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<group_membersUpdateInput, group_membersUncheckedUpdateInput>
  }

  /**
   * group_members delete
   */
  export type group_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
    /**
     * Filter which group_members to delete.
     */
    where: group_membersWhereUniqueInput
  }

  /**
   * group_members deleteMany
   */
  export type group_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_members to delete
     */
    where?: group_membersWhereInput
    /**
     * Limit how many group_members to delete.
     */
    limit?: number
  }

  /**
   * group_members without action
   */
  export type group_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_members
     */
    select?: group_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_members
     */
    omit?: group_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_membersInclude<ExtArgs> | null
  }


  /**
   * Model messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.MessageType | null
    senderId: string | null
    groupId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.MessageType | null
    senderId: string | null
    groupId: string | null
    receiverId: string | null
    createdAt: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    content: number
    type: number
    senderId: number
    groupId: number
    receiverId: number
    createdAt: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    content?: true
    type?: true
    senderId?: true
    groupId?: true
    receiverId?: true
    createdAt?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    content?: true
    type?: true
    senderId?: true
    groupId?: true
    receiverId?: true
    createdAt?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    content?: true
    type?: true
    senderId?: true
    groupId?: true
    receiverId?: true
    createdAt?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to aggregate.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesWhereInput
    orderBy?: messagesOrderByWithAggregationInput | messagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    content: string
    type: $Enums.MessageType
    senderId: string
    groupId: string | null
    receiverId: string | null
    createdAt: Date
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    senderId?: boolean
    groupId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | usersDefaultArgs<ExtArgs>
    receiver?: boolean | messages$receiverArgs<ExtArgs>
    group?: boolean | messages$groupArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    senderId?: boolean
    groupId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | usersDefaultArgs<ExtArgs>
    receiver?: boolean | messages$receiverArgs<ExtArgs>
    group?: boolean | messages$groupArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    senderId?: boolean
    groupId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | usersDefaultArgs<ExtArgs>
    receiver?: boolean | messages$receiverArgs<ExtArgs>
    group?: boolean | messages$groupArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type messagesSelectScalar = {
    id?: boolean
    content?: boolean
    type?: boolean
    senderId?: boolean
    groupId?: boolean
    receiverId?: boolean
    createdAt?: boolean
  }

  export type messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "type" | "senderId" | "groupId" | "receiverId" | "createdAt", ExtArgs["result"]["messages"]>
  export type messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | usersDefaultArgs<ExtArgs>
    receiver?: boolean | messages$receiverArgs<ExtArgs>
    group?: boolean | messages$groupArgs<ExtArgs>
  }
  export type messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | usersDefaultArgs<ExtArgs>
    receiver?: boolean | messages$receiverArgs<ExtArgs>
    group?: boolean | messages$groupArgs<ExtArgs>
  }
  export type messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | usersDefaultArgs<ExtArgs>
    receiver?: boolean | messages$receiverArgs<ExtArgs>
    group?: boolean | messages$groupArgs<ExtArgs>
  }

  export type $messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messages"
    objects: {
      sender: Prisma.$usersPayload<ExtArgs>
      receiver: Prisma.$usersPayload<ExtArgs> | null
      group: Prisma.$groupsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      type: $Enums.MessageType
      senderId: string
      groupId: string | null
      receiverId: string | null
      createdAt: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = $Result.GetResult<Prisma.$messagesPayload, S>

  type messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messages'], meta: { name: 'messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {messagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesFindUniqueArgs>(args: SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesFindFirstArgs>(args?: SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesFindManyArgs>(args?: SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {messagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends messagesCreateArgs>(args: SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesCreateManyArgs>(args?: SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {messagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends messagesDeleteArgs>(args: SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {messagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesUpdateArgs>(args: SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDeleteManyArgs>(args?: SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesUpdateManyArgs>(args: SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {messagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends messagesUpsertArgs>(args: SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma__messagesClient<$Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messagesCountArgs>(
      args?: Subset<T, messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesGroupByArgs['orderBy'] }
        : { orderBy?: messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messages model
   */
  readonly fields: messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends messages$receiverArgs<ExtArgs> = {}>(args?: Subset<T, messages$receiverArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    group<T extends messages$groupArgs<ExtArgs> = {}>(args?: Subset<T, messages$groupArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messages model
   */
  interface messagesFieldRefs {
    readonly id: FieldRef<"messages", 'String'>
    readonly content: FieldRef<"messages", 'String'>
    readonly type: FieldRef<"messages", 'MessageType'>
    readonly senderId: FieldRef<"messages", 'String'>
    readonly groupId: FieldRef<"messages", 'String'>
    readonly receiverId: FieldRef<"messages", 'String'>
    readonly createdAt: FieldRef<"messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messages findUnique
   */
  export type messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findUniqueOrThrow
   */
  export type messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages findFirst
   */
  export type messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findFirstOrThrow
   */
  export type messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages findMany
   */
  export type messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messagesOrderByWithRelationInput | messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * messages create
   */
  export type messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a messages.
     */
    data: XOR<messagesCreateInput, messagesUncheckedCreateInput>
  }

  /**
   * messages createMany
   */
  export type messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messages createManyAndReturn
   */
  export type messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messagesCreateManyInput | messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages update
   */
  export type messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a messages.
     */
    data: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
    /**
     * Choose, which messages to update.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages updateMany
   */
  export type messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * messages updateManyAndReturn
   */
  export type messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * messages upsert
   */
  export type messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the messages to update in case it exists.
     */
    where: messagesWhereUniqueInput
    /**
     * In case the messages found by the `where` argument doesn't exist, create a new messages with this data.
     */
    create: XOR<messagesCreateInput, messagesUncheckedCreateInput>
    /**
     * In case the messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesUpdateInput, messagesUncheckedUpdateInput>
  }

  /**
   * messages delete
   */
  export type messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
    /**
     * Filter which messages to delete.
     */
    where: messagesWhereUniqueInput
  }

  /**
   * messages deleteMany
   */
  export type messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messagesWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * messages.receiver
   */
  export type messages$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * messages.group
   */
  export type messages$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
  }

  /**
   * messages without action
   */
  export type messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messages
     */
    select?: messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messages
     */
    omit?: messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messagesInclude<ExtArgs> | null
  }


  /**
   * Model rooms
   */

  export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  export type RoomsAvgAggregateOutputType = {
    destinationLat: number | null
    destinationLng: number | null
  }

  export type RoomsSumAggregateOutputType = {
    destinationLat: number | null
    destinationLng: number | null
  }

  export type RoomsMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    destinationLat: number | null
    destinationLng: number | null
    destinationName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
  }

  export type RoomsMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    destinationLat: number | null
    destinationLng: number | null
    destinationName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
  }

  export type RoomsCountAggregateOutputType = {
    id: number
    code: number
    name: number
    destinationLat: number
    destinationLng: number
    destinationName: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    _all: number
  }


  export type RoomsAvgAggregateInputType = {
    destinationLat?: true
    destinationLng?: true
  }

  export type RoomsSumAggregateInputType = {
    destinationLat?: true
    destinationLng?: true
  }

  export type RoomsMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    destinationLat?: true
    destinationLng?: true
    destinationName?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
  }

  export type RoomsMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    destinationLat?: true
    destinationLng?: true
    destinationName?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
  }

  export type RoomsCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    destinationLat?: true
    destinationLng?: true
    destinationName?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type RoomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to aggregate.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomsMaxAggregateInputType
  }

  export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
        [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRooms[P]>
      : GetScalarType<T[P], AggregateRooms[P]>
  }




  export type roomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomsWhereInput
    orderBy?: roomsOrderByWithAggregationInput | roomsOrderByWithAggregationInput[]
    by: RoomsScalarFieldEnum[] | RoomsScalarFieldEnum
    having?: roomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomsCountAggregateInputType | true
    _avg?: RoomsAvgAggregateInputType
    _sum?: RoomsSumAggregateInputType
    _min?: RoomsMinAggregateInputType
    _max?: RoomsMaxAggregateInputType
  }

  export type RoomsGroupByOutputType = {
    id: string
    code: string
    name: string | null
    destinationLat: number | null
    destinationLng: number | null
    destinationName: string | null
    createdAt: Date
    updatedAt: Date
    expiresAt: Date | null
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  type GetRoomsGroupByPayload<T extends roomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomsGroupByOutputType[P]>
            : GetScalarType<T[P], RoomsGroupByOutputType[P]>
        }
      >
    >


  export type roomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    destinationLat?: boolean
    destinationLng?: boolean
    destinationName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    members?: boolean | rooms$membersArgs<ExtArgs>
    messages?: boolean | rooms$messagesArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>

  export type roomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    destinationLat?: boolean
    destinationLng?: boolean
    destinationName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["rooms"]>

  export type roomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    destinationLat?: boolean
    destinationLng?: boolean
    destinationName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["rooms"]>

  export type roomsSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    destinationLat?: boolean
    destinationLng?: boolean
    destinationName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
  }

  export type roomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "destinationLat" | "destinationLng" | "destinationName" | "createdAt" | "updatedAt" | "expiresAt", ExtArgs["result"]["rooms"]>
  export type roomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | rooms$membersArgs<ExtArgs>
    messages?: boolean | rooms$messagesArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $roomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rooms"
    objects: {
      members: Prisma.$room_membersPayload<ExtArgs>[]
      messages: Prisma.$room_messagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string | null
      destinationLat: number | null
      destinationLng: number | null
      destinationName: string | null
      createdAt: Date
      updatedAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["rooms"]>
    composites: {}
  }

  type roomsGetPayload<S extends boolean | null | undefined | roomsDefaultArgs> = $Result.GetResult<Prisma.$roomsPayload, S>

  type roomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomsCountAggregateInputType | true
    }

  export interface roomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rooms'], meta: { name: 'rooms' } }
    /**
     * Find zero or one Rooms that matches the filter.
     * @param {roomsFindUniqueArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roomsFindUniqueArgs>(args: SelectSubset<T, roomsFindUniqueArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roomsFindUniqueOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roomsFindUniqueOrThrowArgs>(args: SelectSubset<T, roomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindFirstArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roomsFindFirstArgs>(args?: SelectSubset<T, roomsFindFirstArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindFirstOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roomsFindFirstOrThrowArgs>(args?: SelectSubset<T, roomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.rooms.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.rooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomsWithIdOnly = await prisma.rooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roomsFindManyArgs>(args?: SelectSubset<T, roomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rooms.
     * @param {roomsCreateArgs} args - Arguments to create a Rooms.
     * @example
     * // Create one Rooms
     * const Rooms = await prisma.rooms.create({
     *   data: {
     *     // ... data to create a Rooms
     *   }
     * })
     * 
     */
    create<T extends roomsCreateArgs>(args: SelectSubset<T, roomsCreateArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {roomsCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roomsCreateManyArgs>(args?: SelectSubset<T, roomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {roomsCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roomsCreateManyAndReturnArgs>(args?: SelectSubset<T, roomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rooms.
     * @param {roomsDeleteArgs} args - Arguments to delete one Rooms.
     * @example
     * // Delete one Rooms
     * const Rooms = await prisma.rooms.delete({
     *   where: {
     *     // ... filter to delete one Rooms
     *   }
     * })
     * 
     */
    delete<T extends roomsDeleteArgs>(args: SelectSubset<T, roomsDeleteArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rooms.
     * @param {roomsUpdateArgs} args - Arguments to update one Rooms.
     * @example
     * // Update one Rooms
     * const rooms = await prisma.rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roomsUpdateArgs>(args: SelectSubset<T, roomsUpdateArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {roomsDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roomsDeleteManyArgs>(args?: SelectSubset<T, roomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roomsUpdateManyArgs>(args: SelectSubset<T, roomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {roomsUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roomsUpdateManyAndReturnArgs>(args: SelectSubset<T, roomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rooms.
     * @param {roomsUpsertArgs} args - Arguments to update or create a Rooms.
     * @example
     * // Update or create a Rooms
     * const rooms = await prisma.rooms.upsert({
     *   create: {
     *     // ... data to create a Rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rooms we want to update
     *   }
     * })
     */
    upsert<T extends roomsUpsertArgs>(args: SelectSubset<T, roomsUpsertArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.rooms.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomsCountArgs>(
      args?: Subset<T, roomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomsAggregateArgs>(args: Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>

    /**
     * Group by Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roomsGroupByArgs['orderBy'] }
        : { orderBy?: roomsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rooms model
   */
  readonly fields: roomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends rooms$membersArgs<ExtArgs> = {}>(args?: Subset<T, rooms$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends rooms$messagesArgs<ExtArgs> = {}>(args?: Subset<T, rooms$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rooms model
   */
  interface roomsFieldRefs {
    readonly id: FieldRef<"rooms", 'String'>
    readonly code: FieldRef<"rooms", 'String'>
    readonly name: FieldRef<"rooms", 'String'>
    readonly destinationLat: FieldRef<"rooms", 'Float'>
    readonly destinationLng: FieldRef<"rooms", 'Float'>
    readonly destinationName: FieldRef<"rooms", 'String'>
    readonly createdAt: FieldRef<"rooms", 'DateTime'>
    readonly updatedAt: FieldRef<"rooms", 'DateTime'>
    readonly expiresAt: FieldRef<"rooms", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rooms findUnique
   */
  export type roomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms findUniqueOrThrow
   */
  export type roomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms findFirst
   */
  export type roomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms findFirstOrThrow
   */
  export type roomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms findMany
   */
  export type roomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms create
   */
  export type roomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The data needed to create a rooms.
     */
    data: XOR<roomsCreateInput, roomsUncheckedCreateInput>
  }

  /**
   * rooms createMany
   */
  export type roomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rooms.
     */
    data: roomsCreateManyInput | roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rooms createManyAndReturn
   */
  export type roomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * The data used to create many rooms.
     */
    data: roomsCreateManyInput | roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rooms update
   */
  export type roomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The data needed to update a rooms.
     */
    data: XOR<roomsUpdateInput, roomsUncheckedUpdateInput>
    /**
     * Choose, which rooms to update.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms updateMany
   */
  export type roomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomsUpdateManyMutationInput, roomsUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * rooms updateManyAndReturn
   */
  export type roomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * The data used to update rooms.
     */
    data: XOR<roomsUpdateManyMutationInput, roomsUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * rooms upsert
   */
  export type roomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The filter to search for the rooms to update in case it exists.
     */
    where: roomsWhereUniqueInput
    /**
     * In case the rooms found by the `where` argument doesn't exist, create a new rooms with this data.
     */
    create: XOR<roomsCreateInput, roomsUncheckedCreateInput>
    /**
     * In case the rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomsUpdateInput, roomsUncheckedUpdateInput>
  }

  /**
   * rooms delete
   */
  export type roomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter which rooms to delete.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms deleteMany
   */
  export type roomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to delete
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to delete.
     */
    limit?: number
  }

  /**
   * rooms.members
   */
  export type rooms$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    where?: room_membersWhereInput
    orderBy?: room_membersOrderByWithRelationInput | room_membersOrderByWithRelationInput[]
    cursor?: room_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Room_membersScalarFieldEnum | Room_membersScalarFieldEnum[]
  }

  /**
   * rooms.messages
   */
  export type rooms$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
    where?: room_messagesWhereInput
    orderBy?: room_messagesOrderByWithRelationInput | room_messagesOrderByWithRelationInput[]
    cursor?: room_messagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Room_messagesScalarFieldEnum | Room_messagesScalarFieldEnum[]
  }

  /**
   * rooms without action
   */
  export type roomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
  }


  /**
   * Model room_members
   */

  export type AggregateRoom_members = {
    _count: Room_membersCountAggregateOutputType | null
    _min: Room_membersMinAggregateOutputType | null
    _max: Room_membersMaxAggregateOutputType | null
  }

  export type Room_membersMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type Room_membersMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type Room_membersCountAggregateOutputType = {
    id: number
    roomId: number
    userId: number
    joinedAt: number
    leftAt: number
    _all: number
  }


  export type Room_membersMinAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    joinedAt?: true
    leftAt?: true
  }

  export type Room_membersMaxAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    joinedAt?: true
    leftAt?: true
  }

  export type Room_membersCountAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    joinedAt?: true
    leftAt?: true
    _all?: true
  }

  export type Room_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_members to aggregate.
     */
    where?: room_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_members to fetch.
     */
    orderBy?: room_membersOrderByWithRelationInput | room_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: room_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned room_members
    **/
    _count?: true | Room_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Room_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Room_membersMaxAggregateInputType
  }

  export type GetRoom_membersAggregateType<T extends Room_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom_members[P]>
      : GetScalarType<T[P], AggregateRoom_members[P]>
  }




  export type room_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_membersWhereInput
    orderBy?: room_membersOrderByWithAggregationInput | room_membersOrderByWithAggregationInput[]
    by: Room_membersScalarFieldEnum[] | Room_membersScalarFieldEnum
    having?: room_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Room_membersCountAggregateInputType | true
    _min?: Room_membersMinAggregateInputType
    _max?: Room_membersMaxAggregateInputType
  }

  export type Room_membersGroupByOutputType = {
    id: string
    roomId: string
    userId: string
    joinedAt: Date
    leftAt: Date | null
    _count: Room_membersCountAggregateOutputType | null
    _min: Room_membersMinAggregateOutputType | null
    _max: Room_membersMaxAggregateOutputType | null
  }

  type GetRoom_membersGroupByPayload<T extends room_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Room_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Room_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Room_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Room_membersGroupByOutputType[P]>
        }
      >
    >


  export type room_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    room?: boolean | roomsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room_members"]>

  export type room_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    room?: boolean | roomsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room_members"]>

  export type room_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
    room?: boolean | roomsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room_members"]>

  export type room_membersSelectScalar = {
    id?: boolean
    roomId?: boolean
    userId?: boolean
    joinedAt?: boolean
    leftAt?: boolean
  }

  export type room_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "userId" | "joinedAt" | "leftAt", ExtArgs["result"]["room_members"]>
  export type room_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type room_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type room_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomsDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $room_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room_members"
    objects: {
      room: Prisma.$roomsPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      userId: string
      joinedAt: Date
      leftAt: Date | null
    }, ExtArgs["result"]["room_members"]>
    composites: {}
  }

  type room_membersGetPayload<S extends boolean | null | undefined | room_membersDefaultArgs> = $Result.GetResult<Prisma.$room_membersPayload, S>

  type room_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<room_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Room_membersCountAggregateInputType | true
    }

  export interface room_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room_members'], meta: { name: 'room_members' } }
    /**
     * Find zero or one Room_members that matches the filter.
     * @param {room_membersFindUniqueArgs} args - Arguments to find a Room_members
     * @example
     * // Get one Room_members
     * const room_members = await prisma.room_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends room_membersFindUniqueArgs>(args: SelectSubset<T, room_membersFindUniqueArgs<ExtArgs>>): Prisma__room_membersClient<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {room_membersFindUniqueOrThrowArgs} args - Arguments to find a Room_members
     * @example
     * // Get one Room_members
     * const room_members = await prisma.room_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends room_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, room_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__room_membersClient<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_membersFindFirstArgs} args - Arguments to find a Room_members
     * @example
     * // Get one Room_members
     * const room_members = await prisma.room_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends room_membersFindFirstArgs>(args?: SelectSubset<T, room_membersFindFirstArgs<ExtArgs>>): Prisma__room_membersClient<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_membersFindFirstOrThrowArgs} args - Arguments to find a Room_members
     * @example
     * // Get one Room_members
     * const room_members = await prisma.room_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends room_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, room_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__room_membersClient<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Room_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Room_members
     * const room_members = await prisma.room_members.findMany()
     * 
     * // Get first 10 Room_members
     * const room_members = await prisma.room_members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const room_membersWithIdOnly = await prisma.room_members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends room_membersFindManyArgs>(args?: SelectSubset<T, room_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room_members.
     * @param {room_membersCreateArgs} args - Arguments to create a Room_members.
     * @example
     * // Create one Room_members
     * const Room_members = await prisma.room_members.create({
     *   data: {
     *     // ... data to create a Room_members
     *   }
     * })
     * 
     */
    create<T extends room_membersCreateArgs>(args: SelectSubset<T, room_membersCreateArgs<ExtArgs>>): Prisma__room_membersClient<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Room_members.
     * @param {room_membersCreateManyArgs} args - Arguments to create many Room_members.
     * @example
     * // Create many Room_members
     * const room_members = await prisma.room_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends room_membersCreateManyArgs>(args?: SelectSubset<T, room_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Room_members and returns the data saved in the database.
     * @param {room_membersCreateManyAndReturnArgs} args - Arguments to create many Room_members.
     * @example
     * // Create many Room_members
     * const room_members = await prisma.room_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Room_members and only return the `id`
     * const room_membersWithIdOnly = await prisma.room_members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends room_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, room_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room_members.
     * @param {room_membersDeleteArgs} args - Arguments to delete one Room_members.
     * @example
     * // Delete one Room_members
     * const Room_members = await prisma.room_members.delete({
     *   where: {
     *     // ... filter to delete one Room_members
     *   }
     * })
     * 
     */
    delete<T extends room_membersDeleteArgs>(args: SelectSubset<T, room_membersDeleteArgs<ExtArgs>>): Prisma__room_membersClient<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room_members.
     * @param {room_membersUpdateArgs} args - Arguments to update one Room_members.
     * @example
     * // Update one Room_members
     * const room_members = await prisma.room_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends room_membersUpdateArgs>(args: SelectSubset<T, room_membersUpdateArgs<ExtArgs>>): Prisma__room_membersClient<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Room_members.
     * @param {room_membersDeleteManyArgs} args - Arguments to filter Room_members to delete.
     * @example
     * // Delete a few Room_members
     * const { count } = await prisma.room_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends room_membersDeleteManyArgs>(args?: SelectSubset<T, room_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Room_members
     * const room_members = await prisma.room_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends room_membersUpdateManyArgs>(args: SelectSubset<T, room_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_members and returns the data updated in the database.
     * @param {room_membersUpdateManyAndReturnArgs} args - Arguments to update many Room_members.
     * @example
     * // Update many Room_members
     * const room_members = await prisma.room_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Room_members and only return the `id`
     * const room_membersWithIdOnly = await prisma.room_members.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends room_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, room_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room_members.
     * @param {room_membersUpsertArgs} args - Arguments to update or create a Room_members.
     * @example
     * // Update or create a Room_members
     * const room_members = await prisma.room_members.upsert({
     *   create: {
     *     // ... data to create a Room_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room_members we want to update
     *   }
     * })
     */
    upsert<T extends room_membersUpsertArgs>(args: SelectSubset<T, room_membersUpsertArgs<ExtArgs>>): Prisma__room_membersClient<$Result.GetResult<Prisma.$room_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Room_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_membersCountArgs} args - Arguments to filter Room_members to count.
     * @example
     * // Count the number of Room_members
     * const count = await prisma.room_members.count({
     *   where: {
     *     // ... the filter for the Room_members we want to count
     *   }
     * })
    **/
    count<T extends room_membersCountArgs>(
      args?: Subset<T, room_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Room_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Room_membersAggregateArgs>(args: Subset<T, Room_membersAggregateArgs>): Prisma.PrismaPromise<GetRoom_membersAggregateType<T>>

    /**
     * Group by Room_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_membersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends room_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: room_membersGroupByArgs['orderBy'] }
        : { orderBy?: room_membersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, room_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoom_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room_members model
   */
  readonly fields: room_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__room_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomsDefaultArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the room_members model
   */
  interface room_membersFieldRefs {
    readonly id: FieldRef<"room_members", 'String'>
    readonly roomId: FieldRef<"room_members", 'String'>
    readonly userId: FieldRef<"room_members", 'String'>
    readonly joinedAt: FieldRef<"room_members", 'DateTime'>
    readonly leftAt: FieldRef<"room_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * room_members findUnique
   */
  export type room_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    /**
     * Filter, which room_members to fetch.
     */
    where: room_membersWhereUniqueInput
  }

  /**
   * room_members findUniqueOrThrow
   */
  export type room_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    /**
     * Filter, which room_members to fetch.
     */
    where: room_membersWhereUniqueInput
  }

  /**
   * room_members findFirst
   */
  export type room_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    /**
     * Filter, which room_members to fetch.
     */
    where?: room_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_members to fetch.
     */
    orderBy?: room_membersOrderByWithRelationInput | room_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_members.
     */
    cursor?: room_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_members.
     */
    distinct?: Room_membersScalarFieldEnum | Room_membersScalarFieldEnum[]
  }

  /**
   * room_members findFirstOrThrow
   */
  export type room_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    /**
     * Filter, which room_members to fetch.
     */
    where?: room_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_members to fetch.
     */
    orderBy?: room_membersOrderByWithRelationInput | room_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_members.
     */
    cursor?: room_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_members.
     */
    distinct?: Room_membersScalarFieldEnum | Room_membersScalarFieldEnum[]
  }

  /**
   * room_members findMany
   */
  export type room_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    /**
     * Filter, which room_members to fetch.
     */
    where?: room_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_members to fetch.
     */
    orderBy?: room_membersOrderByWithRelationInput | room_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing room_members.
     */
    cursor?: room_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_members.
     */
    skip?: number
    distinct?: Room_membersScalarFieldEnum | Room_membersScalarFieldEnum[]
  }

  /**
   * room_members create
   */
  export type room_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a room_members.
     */
    data: XOR<room_membersCreateInput, room_membersUncheckedCreateInput>
  }

  /**
   * room_members createMany
   */
  export type room_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many room_members.
     */
    data: room_membersCreateManyInput | room_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room_members createManyAndReturn
   */
  export type room_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * The data used to create many room_members.
     */
    data: room_membersCreateManyInput | room_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * room_members update
   */
  export type room_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a room_members.
     */
    data: XOR<room_membersUpdateInput, room_membersUncheckedUpdateInput>
    /**
     * Choose, which room_members to update.
     */
    where: room_membersWhereUniqueInput
  }

  /**
   * room_members updateMany
   */
  export type room_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update room_members.
     */
    data: XOR<room_membersUpdateManyMutationInput, room_membersUncheckedUpdateManyInput>
    /**
     * Filter which room_members to update
     */
    where?: room_membersWhereInput
    /**
     * Limit how many room_members to update.
     */
    limit?: number
  }

  /**
   * room_members updateManyAndReturn
   */
  export type room_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * The data used to update room_members.
     */
    data: XOR<room_membersUpdateManyMutationInput, room_membersUncheckedUpdateManyInput>
    /**
     * Filter which room_members to update
     */
    where?: room_membersWhereInput
    /**
     * Limit how many room_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * room_members upsert
   */
  export type room_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the room_members to update in case it exists.
     */
    where: room_membersWhereUniqueInput
    /**
     * In case the room_members found by the `where` argument doesn't exist, create a new room_members with this data.
     */
    create: XOR<room_membersCreateInput, room_membersUncheckedCreateInput>
    /**
     * In case the room_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<room_membersUpdateInput, room_membersUncheckedUpdateInput>
  }

  /**
   * room_members delete
   */
  export type room_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
    /**
     * Filter which room_members to delete.
     */
    where: room_membersWhereUniqueInput
  }

  /**
   * room_members deleteMany
   */
  export type room_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_members to delete
     */
    where?: room_membersWhereInput
    /**
     * Limit how many room_members to delete.
     */
    limit?: number
  }

  /**
   * room_members without action
   */
  export type room_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_members
     */
    select?: room_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_members
     */
    omit?: room_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_membersInclude<ExtArgs> | null
  }


  /**
   * Model room_messages
   */

  export type AggregateRoom_messages = {
    _count: Room_messagesCountAggregateOutputType | null
    _min: Room_messagesMinAggregateOutputType | null
    _max: Room_messagesMaxAggregateOutputType | null
  }

  export type Room_messagesMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderId: string | null
    content: string | null
    type: $Enums.MessageType | null
    createdAt: Date | null
  }

  export type Room_messagesMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderId: string | null
    content: string | null
    type: $Enums.MessageType | null
    createdAt: Date | null
  }

  export type Room_messagesCountAggregateOutputType = {
    id: number
    roomId: number
    senderId: number
    content: number
    type: number
    createdAt: number
    _all: number
  }


  export type Room_messagesMinAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    content?: true
    type?: true
    createdAt?: true
  }

  export type Room_messagesMaxAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    content?: true
    type?: true
    createdAt?: true
  }

  export type Room_messagesCountAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    content?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type Room_messagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_messages to aggregate.
     */
    where?: room_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_messages to fetch.
     */
    orderBy?: room_messagesOrderByWithRelationInput | room_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: room_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned room_messages
    **/
    _count?: true | Room_messagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Room_messagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Room_messagesMaxAggregateInputType
  }

  export type GetRoom_messagesAggregateType<T extends Room_messagesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom_messages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom_messages[P]>
      : GetScalarType<T[P], AggregateRoom_messages[P]>
  }




  export type room_messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_messagesWhereInput
    orderBy?: room_messagesOrderByWithAggregationInput | room_messagesOrderByWithAggregationInput[]
    by: Room_messagesScalarFieldEnum[] | Room_messagesScalarFieldEnum
    having?: room_messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Room_messagesCountAggregateInputType | true
    _min?: Room_messagesMinAggregateInputType
    _max?: Room_messagesMaxAggregateInputType
  }

  export type Room_messagesGroupByOutputType = {
    id: string
    roomId: string
    senderId: string
    content: string
    type: $Enums.MessageType
    createdAt: Date
    _count: Room_messagesCountAggregateOutputType | null
    _min: Room_messagesMinAggregateOutputType | null
    _max: Room_messagesMaxAggregateOutputType | null
  }

  type GetRoom_messagesGroupByPayload<T extends room_messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Room_messagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Room_messagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Room_messagesGroupByOutputType[P]>
            : GetScalarType<T[P], Room_messagesGroupByOutputType[P]>
        }
      >
    >


  export type room_messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    room?: boolean | roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room_messages"]>

  export type room_messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    room?: boolean | roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room_messages"]>

  export type room_messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    room?: boolean | roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room_messages"]>

  export type room_messagesSelectScalar = {
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type room_messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "senderId" | "content" | "type" | "createdAt", ExtArgs["result"]["room_messages"]>
  export type room_messagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomsDefaultArgs<ExtArgs>
  }
  export type room_messagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomsDefaultArgs<ExtArgs>
  }
  export type room_messagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | roomsDefaultArgs<ExtArgs>
  }

  export type $room_messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room_messages"
    objects: {
      room: Prisma.$roomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      senderId: string
      content: string
      type: $Enums.MessageType
      createdAt: Date
    }, ExtArgs["result"]["room_messages"]>
    composites: {}
  }

  type room_messagesGetPayload<S extends boolean | null | undefined | room_messagesDefaultArgs> = $Result.GetResult<Prisma.$room_messagesPayload, S>

  type room_messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<room_messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Room_messagesCountAggregateInputType | true
    }

  export interface room_messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room_messages'], meta: { name: 'room_messages' } }
    /**
     * Find zero or one Room_messages that matches the filter.
     * @param {room_messagesFindUniqueArgs} args - Arguments to find a Room_messages
     * @example
     * // Get one Room_messages
     * const room_messages = await prisma.room_messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends room_messagesFindUniqueArgs>(args: SelectSubset<T, room_messagesFindUniqueArgs<ExtArgs>>): Prisma__room_messagesClient<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room_messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {room_messagesFindUniqueOrThrowArgs} args - Arguments to find a Room_messages
     * @example
     * // Get one Room_messages
     * const room_messages = await prisma.room_messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends room_messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, room_messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__room_messagesClient<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_messagesFindFirstArgs} args - Arguments to find a Room_messages
     * @example
     * // Get one Room_messages
     * const room_messages = await prisma.room_messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends room_messagesFindFirstArgs>(args?: SelectSubset<T, room_messagesFindFirstArgs<ExtArgs>>): Prisma__room_messagesClient<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_messagesFindFirstOrThrowArgs} args - Arguments to find a Room_messages
     * @example
     * // Get one Room_messages
     * const room_messages = await prisma.room_messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends room_messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, room_messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__room_messagesClient<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Room_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Room_messages
     * const room_messages = await prisma.room_messages.findMany()
     * 
     * // Get first 10 Room_messages
     * const room_messages = await prisma.room_messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const room_messagesWithIdOnly = await prisma.room_messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends room_messagesFindManyArgs>(args?: SelectSubset<T, room_messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room_messages.
     * @param {room_messagesCreateArgs} args - Arguments to create a Room_messages.
     * @example
     * // Create one Room_messages
     * const Room_messages = await prisma.room_messages.create({
     *   data: {
     *     // ... data to create a Room_messages
     *   }
     * })
     * 
     */
    create<T extends room_messagesCreateArgs>(args: SelectSubset<T, room_messagesCreateArgs<ExtArgs>>): Prisma__room_messagesClient<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Room_messages.
     * @param {room_messagesCreateManyArgs} args - Arguments to create many Room_messages.
     * @example
     * // Create many Room_messages
     * const room_messages = await prisma.room_messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends room_messagesCreateManyArgs>(args?: SelectSubset<T, room_messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Room_messages and returns the data saved in the database.
     * @param {room_messagesCreateManyAndReturnArgs} args - Arguments to create many Room_messages.
     * @example
     * // Create many Room_messages
     * const room_messages = await prisma.room_messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Room_messages and only return the `id`
     * const room_messagesWithIdOnly = await prisma.room_messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends room_messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, room_messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room_messages.
     * @param {room_messagesDeleteArgs} args - Arguments to delete one Room_messages.
     * @example
     * // Delete one Room_messages
     * const Room_messages = await prisma.room_messages.delete({
     *   where: {
     *     // ... filter to delete one Room_messages
     *   }
     * })
     * 
     */
    delete<T extends room_messagesDeleteArgs>(args: SelectSubset<T, room_messagesDeleteArgs<ExtArgs>>): Prisma__room_messagesClient<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room_messages.
     * @param {room_messagesUpdateArgs} args - Arguments to update one Room_messages.
     * @example
     * // Update one Room_messages
     * const room_messages = await prisma.room_messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends room_messagesUpdateArgs>(args: SelectSubset<T, room_messagesUpdateArgs<ExtArgs>>): Prisma__room_messagesClient<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Room_messages.
     * @param {room_messagesDeleteManyArgs} args - Arguments to filter Room_messages to delete.
     * @example
     * // Delete a few Room_messages
     * const { count } = await prisma.room_messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends room_messagesDeleteManyArgs>(args?: SelectSubset<T, room_messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Room_messages
     * const room_messages = await prisma.room_messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends room_messagesUpdateManyArgs>(args: SelectSubset<T, room_messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_messages and returns the data updated in the database.
     * @param {room_messagesUpdateManyAndReturnArgs} args - Arguments to update many Room_messages.
     * @example
     * // Update many Room_messages
     * const room_messages = await prisma.room_messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Room_messages and only return the `id`
     * const room_messagesWithIdOnly = await prisma.room_messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends room_messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, room_messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room_messages.
     * @param {room_messagesUpsertArgs} args - Arguments to update or create a Room_messages.
     * @example
     * // Update or create a Room_messages
     * const room_messages = await prisma.room_messages.upsert({
     *   create: {
     *     // ... data to create a Room_messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room_messages we want to update
     *   }
     * })
     */
    upsert<T extends room_messagesUpsertArgs>(args: SelectSubset<T, room_messagesUpsertArgs<ExtArgs>>): Prisma__room_messagesClient<$Result.GetResult<Prisma.$room_messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Room_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_messagesCountArgs} args - Arguments to filter Room_messages to count.
     * @example
     * // Count the number of Room_messages
     * const count = await prisma.room_messages.count({
     *   where: {
     *     // ... the filter for the Room_messages we want to count
     *   }
     * })
    **/
    count<T extends room_messagesCountArgs>(
      args?: Subset<T, room_messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Room_messagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_messagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Room_messagesAggregateArgs>(args: Subset<T, Room_messagesAggregateArgs>): Prisma.PrismaPromise<GetRoom_messagesAggregateType<T>>

    /**
     * Group by Room_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends room_messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: room_messagesGroupByArgs['orderBy'] }
        : { orderBy?: room_messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, room_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoom_messagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room_messages model
   */
  readonly fields: room_messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room_messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__room_messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomsDefaultArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the room_messages model
   */
  interface room_messagesFieldRefs {
    readonly id: FieldRef<"room_messages", 'String'>
    readonly roomId: FieldRef<"room_messages", 'String'>
    readonly senderId: FieldRef<"room_messages", 'String'>
    readonly content: FieldRef<"room_messages", 'String'>
    readonly type: FieldRef<"room_messages", 'MessageType'>
    readonly createdAt: FieldRef<"room_messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * room_messages findUnique
   */
  export type room_messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
    /**
     * Filter, which room_messages to fetch.
     */
    where: room_messagesWhereUniqueInput
  }

  /**
   * room_messages findUniqueOrThrow
   */
  export type room_messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
    /**
     * Filter, which room_messages to fetch.
     */
    where: room_messagesWhereUniqueInput
  }

  /**
   * room_messages findFirst
   */
  export type room_messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
    /**
     * Filter, which room_messages to fetch.
     */
    where?: room_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_messages to fetch.
     */
    orderBy?: room_messagesOrderByWithRelationInput | room_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_messages.
     */
    cursor?: room_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_messages.
     */
    distinct?: Room_messagesScalarFieldEnum | Room_messagesScalarFieldEnum[]
  }

  /**
   * room_messages findFirstOrThrow
   */
  export type room_messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
    /**
     * Filter, which room_messages to fetch.
     */
    where?: room_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_messages to fetch.
     */
    orderBy?: room_messagesOrderByWithRelationInput | room_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_messages.
     */
    cursor?: room_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_messages.
     */
    distinct?: Room_messagesScalarFieldEnum | Room_messagesScalarFieldEnum[]
  }

  /**
   * room_messages findMany
   */
  export type room_messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
    /**
     * Filter, which room_messages to fetch.
     */
    where?: room_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_messages to fetch.
     */
    orderBy?: room_messagesOrderByWithRelationInput | room_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing room_messages.
     */
    cursor?: room_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_messages.
     */
    skip?: number
    distinct?: Room_messagesScalarFieldEnum | Room_messagesScalarFieldEnum[]
  }

  /**
   * room_messages create
   */
  export type room_messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
    /**
     * The data needed to create a room_messages.
     */
    data: XOR<room_messagesCreateInput, room_messagesUncheckedCreateInput>
  }

  /**
   * room_messages createMany
   */
  export type room_messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many room_messages.
     */
    data: room_messagesCreateManyInput | room_messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room_messages createManyAndReturn
   */
  export type room_messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * The data used to create many room_messages.
     */
    data: room_messagesCreateManyInput | room_messagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * room_messages update
   */
  export type room_messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
    /**
     * The data needed to update a room_messages.
     */
    data: XOR<room_messagesUpdateInput, room_messagesUncheckedUpdateInput>
    /**
     * Choose, which room_messages to update.
     */
    where: room_messagesWhereUniqueInput
  }

  /**
   * room_messages updateMany
   */
  export type room_messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update room_messages.
     */
    data: XOR<room_messagesUpdateManyMutationInput, room_messagesUncheckedUpdateManyInput>
    /**
     * Filter which room_messages to update
     */
    where?: room_messagesWhereInput
    /**
     * Limit how many room_messages to update.
     */
    limit?: number
  }

  /**
   * room_messages updateManyAndReturn
   */
  export type room_messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * The data used to update room_messages.
     */
    data: XOR<room_messagesUpdateManyMutationInput, room_messagesUncheckedUpdateManyInput>
    /**
     * Filter which room_messages to update
     */
    where?: room_messagesWhereInput
    /**
     * Limit how many room_messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * room_messages upsert
   */
  export type room_messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
    /**
     * The filter to search for the room_messages to update in case it exists.
     */
    where: room_messagesWhereUniqueInput
    /**
     * In case the room_messages found by the `where` argument doesn't exist, create a new room_messages with this data.
     */
    create: XOR<room_messagesCreateInput, room_messagesUncheckedCreateInput>
    /**
     * In case the room_messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<room_messagesUpdateInput, room_messagesUncheckedUpdateInput>
  }

  /**
   * room_messages delete
   */
  export type room_messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
    /**
     * Filter which room_messages to delete.
     */
    where: room_messagesWhereUniqueInput
  }

  /**
   * room_messages deleteMany
   */
  export type room_messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_messages to delete
     */
    where?: room_messagesWhereInput
    /**
     * Limit how many room_messages to delete.
     */
    limit?: number
  }

  /**
   * room_messages without action
   */
  export type room_messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_messages
     */
    select?: room_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_messages
     */
    omit?: room_messagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_messagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    characterType: 'characterType',
    characterColor: 'characterColor',
    locationSharingEnabled: 'locationSharingEnabled',
    isAnonymous: 'isAnonymous',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const LocationsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    latitude: 'latitude',
    longitude: 'longitude',
    accuracy: 'accuracy',
    isActive: 'isActive',
    timestamp: 'timestamp'
  };

  export type LocationsScalarFieldEnum = (typeof LocationsScalarFieldEnum)[keyof typeof LocationsScalarFieldEnum]


  export const FriendshipsScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    addresseeId: 'addresseeId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FriendshipsScalarFieldEnum = (typeof FriendshipsScalarFieldEnum)[keyof typeof FriendshipsScalarFieldEnum]


  export const GroupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupsScalarFieldEnum = (typeof GroupsScalarFieldEnum)[keyof typeof GroupsScalarFieldEnum]


  export const Group_membersScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type Group_membersScalarFieldEnum = (typeof Group_membersScalarFieldEnum)[keyof typeof Group_membersScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    content: 'content',
    type: 'type',
    senderId: 'senderId',
    groupId: 'groupId',
    receiverId: 'receiverId',
    createdAt: 'createdAt'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const RoomsScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    destinationLat: 'destinationLat',
    destinationLng: 'destinationLng',
    destinationName: 'destinationName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt'
  };

  export type RoomsScalarFieldEnum = (typeof RoomsScalarFieldEnum)[keyof typeof RoomsScalarFieldEnum]


  export const Room_membersScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    userId: 'userId',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt'
  };

  export type Room_membersScalarFieldEnum = (typeof Room_membersScalarFieldEnum)[keyof typeof Room_membersScalarFieldEnum]


  export const Room_messagesScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    senderId: 'senderId',
    content: 'content',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type Room_messagesScalarFieldEnum = (typeof Room_messagesScalarFieldEnum)[keyof typeof Room_messagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'FriendshipStatus'
   */
  export type EnumFriendshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendshipStatus'>
    


  /**
   * Reference to a field of type 'FriendshipStatus[]'
   */
  export type ListEnumFriendshipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FriendshipStatus[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    characterType?: StringFilter<"users"> | string
    characterColor?: StringFilter<"users"> | string
    locationSharingEnabled?: BoolFilter<"users"> | boolean
    isAnonymous?: BoolFilter<"users"> | boolean
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    locations?: LocationsListRelationFilter
    sentFriendships?: FriendshipsListRelationFilter
    receivedFriendships?: FriendshipsListRelationFilter
    groupMemberships?: Group_membersListRelationFilter
    createdGroups?: GroupsListRelationFilter
    sentMessages?: MessagesListRelationFilter
    receivedMessages?: MessagesListRelationFilter
    roomMemberships?: Room_membersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    characterType?: SortOrder
    characterColor?: SortOrder
    locationSharingEnabled?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locations?: locationsOrderByRelationAggregateInput
    sentFriendships?: friendshipsOrderByRelationAggregateInput
    receivedFriendships?: friendshipsOrderByRelationAggregateInput
    groupMemberships?: group_membersOrderByRelationAggregateInput
    createdGroups?: groupsOrderByRelationAggregateInput
    sentMessages?: messagesOrderByRelationAggregateInput
    receivedMessages?: messagesOrderByRelationAggregateInput
    roomMemberships?: room_membersOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    characterType?: StringFilter<"users"> | string
    characterColor?: StringFilter<"users"> | string
    locationSharingEnabled?: BoolFilter<"users"> | boolean
    isAnonymous?: BoolFilter<"users"> | boolean
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    locations?: LocationsListRelationFilter
    sentFriendships?: FriendshipsListRelationFilter
    receivedFriendships?: FriendshipsListRelationFilter
    groupMemberships?: Group_membersListRelationFilter
    createdGroups?: GroupsListRelationFilter
    sentMessages?: MessagesListRelationFilter
    receivedMessages?: MessagesListRelationFilter
    roomMemberships?: Room_membersListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    characterType?: SortOrder
    characterColor?: SortOrder
    locationSharingEnabled?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    characterType?: StringWithAggregatesFilter<"users"> | string
    characterColor?: StringWithAggregatesFilter<"users"> | string
    locationSharingEnabled?: BoolWithAggregatesFilter<"users"> | boolean
    isAnonymous?: BoolWithAggregatesFilter<"users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type locationsWhereInput = {
    AND?: locationsWhereInput | locationsWhereInput[]
    OR?: locationsWhereInput[]
    NOT?: locationsWhereInput | locationsWhereInput[]
    id?: StringFilter<"locations"> | string
    userId?: StringFilter<"locations"> | string
    latitude?: FloatFilter<"locations"> | number
    longitude?: FloatFilter<"locations"> | number
    accuracy?: FloatNullableFilter<"locations"> | number | null
    isActive?: BoolFilter<"locations"> | boolean
    timestamp?: DateTimeFilter<"locations"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type locationsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrderInput | SortOrder
    isActive?: SortOrder
    timestamp?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type locationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: locationsWhereInput | locationsWhereInput[]
    OR?: locationsWhereInput[]
    NOT?: locationsWhereInput | locationsWhereInput[]
    userId?: StringFilter<"locations"> | string
    latitude?: FloatFilter<"locations"> | number
    longitude?: FloatFilter<"locations"> | number
    accuracy?: FloatNullableFilter<"locations"> | number | null
    isActive?: BoolFilter<"locations"> | boolean
    timestamp?: DateTimeFilter<"locations"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type locationsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrderInput | SortOrder
    isActive?: SortOrder
    timestamp?: SortOrder
    _count?: locationsCountOrderByAggregateInput
    _avg?: locationsAvgOrderByAggregateInput
    _max?: locationsMaxOrderByAggregateInput
    _min?: locationsMinOrderByAggregateInput
    _sum?: locationsSumOrderByAggregateInput
  }

  export type locationsScalarWhereWithAggregatesInput = {
    AND?: locationsScalarWhereWithAggregatesInput | locationsScalarWhereWithAggregatesInput[]
    OR?: locationsScalarWhereWithAggregatesInput[]
    NOT?: locationsScalarWhereWithAggregatesInput | locationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"locations"> | string
    userId?: StringWithAggregatesFilter<"locations"> | string
    latitude?: FloatWithAggregatesFilter<"locations"> | number
    longitude?: FloatWithAggregatesFilter<"locations"> | number
    accuracy?: FloatNullableWithAggregatesFilter<"locations"> | number | null
    isActive?: BoolWithAggregatesFilter<"locations"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"locations"> | Date | string
  }

  export type friendshipsWhereInput = {
    AND?: friendshipsWhereInput | friendshipsWhereInput[]
    OR?: friendshipsWhereInput[]
    NOT?: friendshipsWhereInput | friendshipsWhereInput[]
    id?: StringFilter<"friendships"> | string
    requesterId?: StringFilter<"friendships"> | string
    addresseeId?: StringFilter<"friendships"> | string
    status?: EnumFriendshipStatusFilter<"friendships"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"friendships"> | Date | string
    updatedAt?: DateTimeFilter<"friendships"> | Date | string
    requester?: XOR<UsersScalarRelationFilter, usersWhereInput>
    addressee?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type friendshipsOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requester?: usersOrderByWithRelationInput
    addressee?: usersOrderByWithRelationInput
  }

  export type friendshipsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requesterId_addresseeId?: friendshipsRequesterIdAddresseeIdCompoundUniqueInput
    AND?: friendshipsWhereInput | friendshipsWhereInput[]
    OR?: friendshipsWhereInput[]
    NOT?: friendshipsWhereInput | friendshipsWhereInput[]
    requesterId?: StringFilter<"friendships"> | string
    addresseeId?: StringFilter<"friendships"> | string
    status?: EnumFriendshipStatusFilter<"friendships"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"friendships"> | Date | string
    updatedAt?: DateTimeFilter<"friendships"> | Date | string
    requester?: XOR<UsersScalarRelationFilter, usersWhereInput>
    addressee?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "requesterId_addresseeId">

  export type friendshipsOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: friendshipsCountOrderByAggregateInput
    _max?: friendshipsMaxOrderByAggregateInput
    _min?: friendshipsMinOrderByAggregateInput
  }

  export type friendshipsScalarWhereWithAggregatesInput = {
    AND?: friendshipsScalarWhereWithAggregatesInput | friendshipsScalarWhereWithAggregatesInput[]
    OR?: friendshipsScalarWhereWithAggregatesInput[]
    NOT?: friendshipsScalarWhereWithAggregatesInput | friendshipsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"friendships"> | string
    requesterId?: StringWithAggregatesFilter<"friendships"> | string
    addresseeId?: StringWithAggregatesFilter<"friendships"> | string
    status?: EnumFriendshipStatusWithAggregatesFilter<"friendships"> | $Enums.FriendshipStatus
    createdAt?: DateTimeWithAggregatesFilter<"friendships"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"friendships"> | Date | string
  }

  export type groupsWhereInput = {
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    id?: StringFilter<"groups"> | string
    name?: StringFilter<"groups"> | string
    description?: StringNullableFilter<"groups"> | string | null
    creatorId?: StringFilter<"groups"> | string
    createdAt?: DateTimeFilter<"groups"> | Date | string
    updatedAt?: DateTimeFilter<"groups"> | Date | string
    creator?: XOR<UsersScalarRelationFilter, usersWhereInput>
    members?: Group_membersListRelationFilter
    messages?: MessagesListRelationFilter
  }

  export type groupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: usersOrderByWithRelationInput
    members?: group_membersOrderByRelationAggregateInput
    messages?: messagesOrderByRelationAggregateInput
  }

  export type groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    name?: StringFilter<"groups"> | string
    description?: StringNullableFilter<"groups"> | string | null
    creatorId?: StringFilter<"groups"> | string
    createdAt?: DateTimeFilter<"groups"> | Date | string
    updatedAt?: DateTimeFilter<"groups"> | Date | string
    creator?: XOR<UsersScalarRelationFilter, usersWhereInput>
    members?: Group_membersListRelationFilter
    messages?: MessagesListRelationFilter
  }, "id">

  export type groupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: groupsCountOrderByAggregateInput
    _max?: groupsMaxOrderByAggregateInput
    _min?: groupsMinOrderByAggregateInput
  }

  export type groupsScalarWhereWithAggregatesInput = {
    AND?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    OR?: groupsScalarWhereWithAggregatesInput[]
    NOT?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"groups"> | string
    name?: StringWithAggregatesFilter<"groups"> | string
    description?: StringNullableWithAggregatesFilter<"groups"> | string | null
    creatorId?: StringWithAggregatesFilter<"groups"> | string
    createdAt?: DateTimeWithAggregatesFilter<"groups"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"groups"> | Date | string
  }

  export type group_membersWhereInput = {
    AND?: group_membersWhereInput | group_membersWhereInput[]
    OR?: group_membersWhereInput[]
    NOT?: group_membersWhereInput | group_membersWhereInput[]
    id?: StringFilter<"group_members"> | string
    groupId?: StringFilter<"group_members"> | string
    userId?: StringFilter<"group_members"> | string
    joinedAt?: DateTimeFilter<"group_members"> | Date | string
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type group_membersOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    group?: groupsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type group_membersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId_userId?: group_membersGroupIdUserIdCompoundUniqueInput
    AND?: group_membersWhereInput | group_membersWhereInput[]
    OR?: group_membersWhereInput[]
    NOT?: group_membersWhereInput | group_membersWhereInput[]
    groupId?: StringFilter<"group_members"> | string
    userId?: StringFilter<"group_members"> | string
    joinedAt?: DateTimeFilter<"group_members"> | Date | string
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "groupId_userId">

  export type group_membersOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: group_membersCountOrderByAggregateInput
    _max?: group_membersMaxOrderByAggregateInput
    _min?: group_membersMinOrderByAggregateInput
  }

  export type group_membersScalarWhereWithAggregatesInput = {
    AND?: group_membersScalarWhereWithAggregatesInput | group_membersScalarWhereWithAggregatesInput[]
    OR?: group_membersScalarWhereWithAggregatesInput[]
    NOT?: group_membersScalarWhereWithAggregatesInput | group_membersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"group_members"> | string
    groupId?: StringWithAggregatesFilter<"group_members"> | string
    userId?: StringWithAggregatesFilter<"group_members"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"group_members"> | Date | string
  }

  export type messagesWhereInput = {
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    id?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    type?: EnumMessageTypeFilter<"messages"> | $Enums.MessageType
    senderId?: StringFilter<"messages"> | string
    groupId?: StringNullableFilter<"messages"> | string | null
    receiverId?: StringNullableFilter<"messages"> | string | null
    createdAt?: DateTimeFilter<"messages"> | Date | string
    sender?: XOR<UsersScalarRelationFilter, usersWhereInput>
    receiver?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    group?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
  }

  export type messagesOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    receiverId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sender?: usersOrderByWithRelationInput
    receiver?: usersOrderByWithRelationInput
    group?: groupsOrderByWithRelationInput
  }

  export type messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: messagesWhereInput | messagesWhereInput[]
    OR?: messagesWhereInput[]
    NOT?: messagesWhereInput | messagesWhereInput[]
    content?: StringFilter<"messages"> | string
    type?: EnumMessageTypeFilter<"messages"> | $Enums.MessageType
    senderId?: StringFilter<"messages"> | string
    groupId?: StringNullableFilter<"messages"> | string | null
    receiverId?: StringNullableFilter<"messages"> | string | null
    createdAt?: DateTimeFilter<"messages"> | Date | string
    sender?: XOR<UsersScalarRelationFilter, usersWhereInput>
    receiver?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    group?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
  }, "id">

  export type messagesOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    receiverId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: messagesCountOrderByAggregateInput
    _max?: messagesMaxOrderByAggregateInput
    _min?: messagesMinOrderByAggregateInput
  }

  export type messagesScalarWhereWithAggregatesInput = {
    AND?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    OR?: messagesScalarWhereWithAggregatesInput[]
    NOT?: messagesScalarWhereWithAggregatesInput | messagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"messages"> | string
    content?: StringWithAggregatesFilter<"messages"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"messages"> | $Enums.MessageType
    senderId?: StringWithAggregatesFilter<"messages"> | string
    groupId?: StringNullableWithAggregatesFilter<"messages"> | string | null
    receiverId?: StringNullableWithAggregatesFilter<"messages"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"messages"> | Date | string
  }

  export type roomsWhereInput = {
    AND?: roomsWhereInput | roomsWhereInput[]
    OR?: roomsWhereInput[]
    NOT?: roomsWhereInput | roomsWhereInput[]
    id?: StringFilter<"rooms"> | string
    code?: StringFilter<"rooms"> | string
    name?: StringNullableFilter<"rooms"> | string | null
    destinationLat?: FloatNullableFilter<"rooms"> | number | null
    destinationLng?: FloatNullableFilter<"rooms"> | number | null
    destinationName?: StringNullableFilter<"rooms"> | string | null
    createdAt?: DateTimeFilter<"rooms"> | Date | string
    updatedAt?: DateTimeFilter<"rooms"> | Date | string
    expiresAt?: DateTimeNullableFilter<"rooms"> | Date | string | null
    members?: Room_membersListRelationFilter
    messages?: Room_messagesListRelationFilter
  }

  export type roomsOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    destinationLat?: SortOrderInput | SortOrder
    destinationLng?: SortOrderInput | SortOrder
    destinationName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    members?: room_membersOrderByRelationAggregateInput
    messages?: room_messagesOrderByRelationAggregateInput
  }

  export type roomsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: roomsWhereInput | roomsWhereInput[]
    OR?: roomsWhereInput[]
    NOT?: roomsWhereInput | roomsWhereInput[]
    name?: StringNullableFilter<"rooms"> | string | null
    destinationLat?: FloatNullableFilter<"rooms"> | number | null
    destinationLng?: FloatNullableFilter<"rooms"> | number | null
    destinationName?: StringNullableFilter<"rooms"> | string | null
    createdAt?: DateTimeFilter<"rooms"> | Date | string
    updatedAt?: DateTimeFilter<"rooms"> | Date | string
    expiresAt?: DateTimeNullableFilter<"rooms"> | Date | string | null
    members?: Room_membersListRelationFilter
    messages?: Room_messagesListRelationFilter
  }, "id" | "code">

  export type roomsOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrderInput | SortOrder
    destinationLat?: SortOrderInput | SortOrder
    destinationLng?: SortOrderInput | SortOrder
    destinationName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: roomsCountOrderByAggregateInput
    _avg?: roomsAvgOrderByAggregateInput
    _max?: roomsMaxOrderByAggregateInput
    _min?: roomsMinOrderByAggregateInput
    _sum?: roomsSumOrderByAggregateInput
  }

  export type roomsScalarWhereWithAggregatesInput = {
    AND?: roomsScalarWhereWithAggregatesInput | roomsScalarWhereWithAggregatesInput[]
    OR?: roomsScalarWhereWithAggregatesInput[]
    NOT?: roomsScalarWhereWithAggregatesInput | roomsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"rooms"> | string
    code?: StringWithAggregatesFilter<"rooms"> | string
    name?: StringNullableWithAggregatesFilter<"rooms"> | string | null
    destinationLat?: FloatNullableWithAggregatesFilter<"rooms"> | number | null
    destinationLng?: FloatNullableWithAggregatesFilter<"rooms"> | number | null
    destinationName?: StringNullableWithAggregatesFilter<"rooms"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"rooms"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"rooms"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"rooms"> | Date | string | null
  }

  export type room_membersWhereInput = {
    AND?: room_membersWhereInput | room_membersWhereInput[]
    OR?: room_membersWhereInput[]
    NOT?: room_membersWhereInput | room_membersWhereInput[]
    id?: StringFilter<"room_members"> | string
    roomId?: StringFilter<"room_members"> | string
    userId?: StringFilter<"room_members"> | string
    joinedAt?: DateTimeFilter<"room_members"> | Date | string
    leftAt?: DateTimeNullableFilter<"room_members"> | Date | string | null
    room?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type room_membersOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    room?: roomsOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type room_membersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId_userId?: room_membersRoomIdUserIdCompoundUniqueInput
    AND?: room_membersWhereInput | room_membersWhereInput[]
    OR?: room_membersWhereInput[]
    NOT?: room_membersWhereInput | room_membersWhereInput[]
    roomId?: StringFilter<"room_members"> | string
    userId?: StringFilter<"room_members"> | string
    joinedAt?: DateTimeFilter<"room_members"> | Date | string
    leftAt?: DateTimeNullableFilter<"room_members"> | Date | string | null
    room?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "roomId_userId">

  export type room_membersOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrderInput | SortOrder
    _count?: room_membersCountOrderByAggregateInput
    _max?: room_membersMaxOrderByAggregateInput
    _min?: room_membersMinOrderByAggregateInput
  }

  export type room_membersScalarWhereWithAggregatesInput = {
    AND?: room_membersScalarWhereWithAggregatesInput | room_membersScalarWhereWithAggregatesInput[]
    OR?: room_membersScalarWhereWithAggregatesInput[]
    NOT?: room_membersScalarWhereWithAggregatesInput | room_membersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"room_members"> | string
    roomId?: StringWithAggregatesFilter<"room_members"> | string
    userId?: StringWithAggregatesFilter<"room_members"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"room_members"> | Date | string
    leftAt?: DateTimeNullableWithAggregatesFilter<"room_members"> | Date | string | null
  }

  export type room_messagesWhereInput = {
    AND?: room_messagesWhereInput | room_messagesWhereInput[]
    OR?: room_messagesWhereInput[]
    NOT?: room_messagesWhereInput | room_messagesWhereInput[]
    id?: StringFilter<"room_messages"> | string
    roomId?: StringFilter<"room_messages"> | string
    senderId?: StringFilter<"room_messages"> | string
    content?: StringFilter<"room_messages"> | string
    type?: EnumMessageTypeFilter<"room_messages"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"room_messages"> | Date | string
    room?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
  }

  export type room_messagesOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    room?: roomsOrderByWithRelationInput
  }

  export type room_messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: room_messagesWhereInput | room_messagesWhereInput[]
    OR?: room_messagesWhereInput[]
    NOT?: room_messagesWhereInput | room_messagesWhereInput[]
    roomId?: StringFilter<"room_messages"> | string
    senderId?: StringFilter<"room_messages"> | string
    content?: StringFilter<"room_messages"> | string
    type?: EnumMessageTypeFilter<"room_messages"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"room_messages"> | Date | string
    room?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
  }, "id">

  export type room_messagesOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: room_messagesCountOrderByAggregateInput
    _max?: room_messagesMaxOrderByAggregateInput
    _min?: room_messagesMinOrderByAggregateInput
  }

  export type room_messagesScalarWhereWithAggregatesInput = {
    AND?: room_messagesScalarWhereWithAggregatesInput | room_messagesScalarWhereWithAggregatesInput[]
    OR?: room_messagesScalarWhereWithAggregatesInput[]
    NOT?: room_messagesScalarWhereWithAggregatesInput | room_messagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"room_messages"> | string
    roomId?: StringWithAggregatesFilter<"room_messages"> | string
    senderId?: StringWithAggregatesFilter<"room_messages"> | string
    content?: StringWithAggregatesFilter<"room_messages"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"room_messages"> | $Enums.MessageType
    createdAt?: DateTimeWithAggregatesFilter<"room_messages"> | Date | string
  }

  export type usersCreateInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersCreateNestedManyWithoutUserInput
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesUncheckedCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUncheckedUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsCreateInput = {
    id?: string
    latitude: number
    longitude: number
    accuracy?: number | null
    isActive?: boolean
    timestamp?: Date | string
    user: usersCreateNestedOneWithoutLocationsInput
  }

  export type locationsUncheckedCreateInput = {
    id?: string
    userId: string
    latitude: number
    longitude: number
    accuracy?: number | null
    isActive?: boolean
    timestamp?: Date | string
  }

  export type locationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type locationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsCreateManyInput = {
    id?: string
    userId: string
    latitude: number
    longitude: number
    accuracy?: number | null
    isActive?: boolean
    timestamp?: Date | string
  }

  export type locationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendshipsCreateInput = {
    id?: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: usersCreateNestedOneWithoutSentFriendshipsInput
    addressee: usersCreateNestedOneWithoutReceivedFriendshipsInput
  }

  export type friendshipsUncheckedCreateInput = {
    id?: string
    requesterId: string
    addresseeId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type friendshipsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: usersUpdateOneRequiredWithoutSentFriendshipsNestedInput
    addressee?: usersUpdateOneRequiredWithoutReceivedFriendshipsNestedInput
  }

  export type friendshipsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendshipsCreateManyInput = {
    id?: string
    requesterId: string
    addresseeId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type friendshipsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendshipsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: usersCreateNestedOneWithoutCreatedGroupsInput
    members?: group_membersCreateNestedManyWithoutGroupInput
    messages?: messagesCreateNestedManyWithoutGroupInput
  }

  export type groupsUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: group_membersUncheckedCreateNestedManyWithoutGroupInput
    messages?: messagesUncheckedCreateNestedManyWithoutGroupInput
  }

  export type groupsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: usersUpdateOneRequiredWithoutCreatedGroupsNestedInput
    members?: group_membersUpdateManyWithoutGroupNestedInput
    messages?: messagesUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: group_membersUncheckedUpdateManyWithoutGroupNestedInput
    messages?: messagesUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type groupsCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type groupsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_membersCreateInput = {
    id?: string
    joinedAt?: Date | string
    group: groupsCreateNestedOneWithoutMembersInput
    user: usersCreateNestedOneWithoutGroupMembershipsInput
  }

  export type group_membersUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    joinedAt?: Date | string
  }

  export type group_membersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneRequiredWithoutMembersNestedInput
    user?: usersUpdateOneRequiredWithoutGroupMembershipsNestedInput
  }

  export type group_membersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_membersCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    joinedAt?: Date | string
  }

  export type group_membersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_membersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    sender: usersCreateNestedOneWithoutSentMessagesInput
    receiver?: usersCreateNestedOneWithoutReceivedMessagesInput
    group?: groupsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    senderId: string
    groupId?: string | null
    receiverId?: string | null
    createdAt?: Date | string
  }

  export type messagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usersUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: usersUpdateOneWithoutReceivedMessagesNestedInput
    group?: groupsUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    senderId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesCreateManyInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    senderId: string
    groupId?: string | null
    receiverId?: string | null
    createdAt?: Date | string
  }

  export type messagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    senderId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roomsCreateInput = {
    id?: string
    code: string
    name?: string | null
    destinationLat?: number | null
    destinationLng?: number | null
    destinationName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    members?: room_membersCreateNestedManyWithoutRoomInput
    messages?: room_messagesCreateNestedManyWithoutRoomInput
  }

  export type roomsUncheckedCreateInput = {
    id?: string
    code: string
    name?: string | null
    destinationLat?: number | null
    destinationLng?: number | null
    destinationName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    members?: room_membersUncheckedCreateNestedManyWithoutRoomInput
    messages?: room_messagesUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    destinationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: room_membersUpdateManyWithoutRoomNestedInput
    messages?: room_messagesUpdateManyWithoutRoomNestedInput
  }

  export type roomsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    destinationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: room_membersUncheckedUpdateManyWithoutRoomNestedInput
    messages?: room_messagesUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type roomsCreateManyInput = {
    id?: string
    code: string
    name?: string | null
    destinationLat?: number | null
    destinationLng?: number | null
    destinationName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type roomsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    destinationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type roomsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    destinationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type room_membersCreateInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    room: roomsCreateNestedOneWithoutMembersInput
    user: usersCreateNestedOneWithoutRoomMembershipsInput
  }

  export type room_membersUncheckedCreateInput = {
    id?: string
    roomId: string
    userId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type room_membersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: roomsUpdateOneRequiredWithoutMembersNestedInput
    user?: usersUpdateOneRequiredWithoutRoomMembershipsNestedInput
  }

  export type room_membersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type room_membersCreateManyInput = {
    id?: string
    roomId: string
    userId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type room_membersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type room_membersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type room_messagesCreateInput = {
    id?: string
    senderId: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    room: roomsCreateNestedOneWithoutMessagesInput
  }

  export type room_messagesUncheckedCreateInput = {
    id?: string
    roomId: string
    senderId: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type room_messagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: roomsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type room_messagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_messagesCreateManyInput = {
    id?: string
    roomId: string
    senderId: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type room_messagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_messagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LocationsListRelationFilter = {
    every?: locationsWhereInput
    some?: locationsWhereInput
    none?: locationsWhereInput
  }

  export type FriendshipsListRelationFilter = {
    every?: friendshipsWhereInput
    some?: friendshipsWhereInput
    none?: friendshipsWhereInput
  }

  export type Group_membersListRelationFilter = {
    every?: group_membersWhereInput
    some?: group_membersWhereInput
    none?: group_membersWhereInput
  }

  export type GroupsListRelationFilter = {
    every?: groupsWhereInput
    some?: groupsWhereInput
    none?: groupsWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: messagesWhereInput
    some?: messagesWhereInput
    none?: messagesWhereInput
  }

  export type Room_membersListRelationFilter = {
    every?: room_membersWhereInput
    some?: room_membersWhereInput
    none?: room_membersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type locationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type friendshipsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type group_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type groupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type room_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    characterType?: SortOrder
    characterColor?: SortOrder
    locationSharingEnabled?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    characterType?: SortOrder
    characterColor?: SortOrder
    locationSharingEnabled?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    characterType?: SortOrder
    characterColor?: SortOrder
    locationSharingEnabled?: SortOrder
    isAnonymous?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type locationsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrder
    isActive?: SortOrder
    timestamp?: SortOrder
  }

  export type locationsAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrder
  }

  export type locationsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrder
    isActive?: SortOrder
    timestamp?: SortOrder
  }

  export type locationsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrder
    isActive?: SortOrder
    timestamp?: SortOrder
  }

  export type locationsSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    accuracy?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type friendshipsRequesterIdAddresseeIdCompoundUniqueInput = {
    requesterId: string
    addresseeId: string
  }

  export type friendshipsCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type friendshipsMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type friendshipsMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type groupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupsScalarRelationFilter = {
    is?: groupsWhereInput
    isNot?: groupsWhereInput
  }

  export type group_membersGroupIdUserIdCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type group_membersCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type group_membersMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type group_membersMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type GroupsNullableScalarRelationFilter = {
    is?: groupsWhereInput | null
    isNot?: groupsWhereInput | null
  }

  export type messagesCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    groupId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    groupId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type messagesMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    groupId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Room_messagesListRelationFilter = {
    every?: room_messagesWhereInput
    some?: room_messagesWhereInput
    none?: room_messagesWhereInput
  }

  export type room_messagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roomsCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    destinationLat?: SortOrder
    destinationLng?: SortOrder
    destinationName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type roomsAvgOrderByAggregateInput = {
    destinationLat?: SortOrder
    destinationLng?: SortOrder
  }

  export type roomsMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    destinationLat?: SortOrder
    destinationLng?: SortOrder
    destinationName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type roomsMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    destinationLat?: SortOrder
    destinationLng?: SortOrder
    destinationName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type roomsSumOrderByAggregateInput = {
    destinationLat?: SortOrder
    destinationLng?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RoomsScalarRelationFilter = {
    is?: roomsWhereInput
    isNot?: roomsWhereInput
  }

  export type room_membersRoomIdUserIdCompoundUniqueInput = {
    roomId: string
    userId: string
  }

  export type room_membersCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type room_membersMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type room_membersMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type room_messagesCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type room_messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type room_messagesMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type locationsCreateNestedManyWithoutUserInput = {
    create?: XOR<locationsCreateWithoutUserInput, locationsUncheckedCreateWithoutUserInput> | locationsCreateWithoutUserInput[] | locationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: locationsCreateOrConnectWithoutUserInput | locationsCreateOrConnectWithoutUserInput[]
    createMany?: locationsCreateManyUserInputEnvelope
    connect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
  }

  export type friendshipsCreateNestedManyWithoutRequesterInput = {
    create?: XOR<friendshipsCreateWithoutRequesterInput, friendshipsUncheckedCreateWithoutRequesterInput> | friendshipsCreateWithoutRequesterInput[] | friendshipsUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutRequesterInput | friendshipsCreateOrConnectWithoutRequesterInput[]
    createMany?: friendshipsCreateManyRequesterInputEnvelope
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
  }

  export type friendshipsCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<friendshipsCreateWithoutAddresseeInput, friendshipsUncheckedCreateWithoutAddresseeInput> | friendshipsCreateWithoutAddresseeInput[] | friendshipsUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutAddresseeInput | friendshipsCreateOrConnectWithoutAddresseeInput[]
    createMany?: friendshipsCreateManyAddresseeInputEnvelope
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
  }

  export type group_membersCreateNestedManyWithoutUserInput = {
    create?: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput> | group_membersCreateWithoutUserInput[] | group_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutUserInput | group_membersCreateOrConnectWithoutUserInput[]
    createMany?: group_membersCreateManyUserInputEnvelope
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
  }

  export type groupsCreateNestedManyWithoutCreatorInput = {
    create?: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput> | groupsCreateWithoutCreatorInput[] | groupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutCreatorInput | groupsCreateOrConnectWithoutCreatorInput[]
    createMany?: groupsCreateManyCreatorInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutSenderInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutReceiverInput = {
    create?: XOR<messagesCreateWithoutReceiverInput, messagesUncheckedCreateWithoutReceiverInput> | messagesCreateWithoutReceiverInput[] | messagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutReceiverInput | messagesCreateOrConnectWithoutReceiverInput[]
    createMany?: messagesCreateManyReceiverInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type room_membersCreateNestedManyWithoutUserInput = {
    create?: XOR<room_membersCreateWithoutUserInput, room_membersUncheckedCreateWithoutUserInput> | room_membersCreateWithoutUserInput[] | room_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: room_membersCreateOrConnectWithoutUserInput | room_membersCreateOrConnectWithoutUserInput[]
    createMany?: room_membersCreateManyUserInputEnvelope
    connect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
  }

  export type locationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<locationsCreateWithoutUserInput, locationsUncheckedCreateWithoutUserInput> | locationsCreateWithoutUserInput[] | locationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: locationsCreateOrConnectWithoutUserInput | locationsCreateOrConnectWithoutUserInput[]
    createMany?: locationsCreateManyUserInputEnvelope
    connect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
  }

  export type friendshipsUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<friendshipsCreateWithoutRequesterInput, friendshipsUncheckedCreateWithoutRequesterInput> | friendshipsCreateWithoutRequesterInput[] | friendshipsUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutRequesterInput | friendshipsCreateOrConnectWithoutRequesterInput[]
    createMany?: friendshipsCreateManyRequesterInputEnvelope
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
  }

  export type friendshipsUncheckedCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<friendshipsCreateWithoutAddresseeInput, friendshipsUncheckedCreateWithoutAddresseeInput> | friendshipsCreateWithoutAddresseeInput[] | friendshipsUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutAddresseeInput | friendshipsCreateOrConnectWithoutAddresseeInput[]
    createMany?: friendshipsCreateManyAddresseeInputEnvelope
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
  }

  export type group_membersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput> | group_membersCreateWithoutUserInput[] | group_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutUserInput | group_membersCreateOrConnectWithoutUserInput[]
    createMany?: group_membersCreateManyUserInputEnvelope
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
  }

  export type groupsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput> | groupsCreateWithoutCreatorInput[] | groupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutCreatorInput | groupsCreateOrConnectWithoutCreatorInput[]
    createMany?: groupsCreateManyCreatorInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<messagesCreateWithoutReceiverInput, messagesUncheckedCreateWithoutReceiverInput> | messagesCreateWithoutReceiverInput[] | messagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutReceiverInput | messagesCreateOrConnectWithoutReceiverInput[]
    createMany?: messagesCreateManyReceiverInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type room_membersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<room_membersCreateWithoutUserInput, room_membersUncheckedCreateWithoutUserInput> | room_membersCreateWithoutUserInput[] | room_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: room_membersCreateOrConnectWithoutUserInput | room_membersCreateOrConnectWithoutUserInput[]
    createMany?: room_membersCreateManyUserInputEnvelope
    connect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type locationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<locationsCreateWithoutUserInput, locationsUncheckedCreateWithoutUserInput> | locationsCreateWithoutUserInput[] | locationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: locationsCreateOrConnectWithoutUserInput | locationsCreateOrConnectWithoutUserInput[]
    upsert?: locationsUpsertWithWhereUniqueWithoutUserInput | locationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: locationsCreateManyUserInputEnvelope
    set?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    disconnect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    delete?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    connect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    update?: locationsUpdateWithWhereUniqueWithoutUserInput | locationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: locationsUpdateManyWithWhereWithoutUserInput | locationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: locationsScalarWhereInput | locationsScalarWhereInput[]
  }

  export type friendshipsUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<friendshipsCreateWithoutRequesterInput, friendshipsUncheckedCreateWithoutRequesterInput> | friendshipsCreateWithoutRequesterInput[] | friendshipsUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutRequesterInput | friendshipsCreateOrConnectWithoutRequesterInput[]
    upsert?: friendshipsUpsertWithWhereUniqueWithoutRequesterInput | friendshipsUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: friendshipsCreateManyRequesterInputEnvelope
    set?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    disconnect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    delete?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    update?: friendshipsUpdateWithWhereUniqueWithoutRequesterInput | friendshipsUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: friendshipsUpdateManyWithWhereWithoutRequesterInput | friendshipsUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
  }

  export type friendshipsUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<friendshipsCreateWithoutAddresseeInput, friendshipsUncheckedCreateWithoutAddresseeInput> | friendshipsCreateWithoutAddresseeInput[] | friendshipsUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutAddresseeInput | friendshipsCreateOrConnectWithoutAddresseeInput[]
    upsert?: friendshipsUpsertWithWhereUniqueWithoutAddresseeInput | friendshipsUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: friendshipsCreateManyAddresseeInputEnvelope
    set?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    disconnect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    delete?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    update?: friendshipsUpdateWithWhereUniqueWithoutAddresseeInput | friendshipsUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: friendshipsUpdateManyWithWhereWithoutAddresseeInput | friendshipsUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
  }

  export type group_membersUpdateManyWithoutUserNestedInput = {
    create?: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput> | group_membersCreateWithoutUserInput[] | group_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutUserInput | group_membersCreateOrConnectWithoutUserInput[]
    upsert?: group_membersUpsertWithWhereUniqueWithoutUserInput | group_membersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: group_membersCreateManyUserInputEnvelope
    set?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    disconnect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    delete?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    update?: group_membersUpdateWithWhereUniqueWithoutUserInput | group_membersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: group_membersUpdateManyWithWhereWithoutUserInput | group_membersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
  }

  export type groupsUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput> | groupsCreateWithoutCreatorInput[] | groupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutCreatorInput | groupsCreateOrConnectWithoutCreatorInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutCreatorInput | groupsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: groupsCreateManyCreatorInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutCreatorInput | groupsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutCreatorInput | groupsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutSenderNestedInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutSenderInput | messagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutSenderInput | messagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutSenderInput | messagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<messagesCreateWithoutReceiverInput, messagesUncheckedCreateWithoutReceiverInput> | messagesCreateWithoutReceiverInput[] | messagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutReceiverInput | messagesCreateOrConnectWithoutReceiverInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutReceiverInput | messagesUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: messagesCreateManyReceiverInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutReceiverInput | messagesUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutReceiverInput | messagesUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type room_membersUpdateManyWithoutUserNestedInput = {
    create?: XOR<room_membersCreateWithoutUserInput, room_membersUncheckedCreateWithoutUserInput> | room_membersCreateWithoutUserInput[] | room_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: room_membersCreateOrConnectWithoutUserInput | room_membersCreateOrConnectWithoutUserInput[]
    upsert?: room_membersUpsertWithWhereUniqueWithoutUserInput | room_membersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: room_membersCreateManyUserInputEnvelope
    set?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    disconnect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    delete?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    connect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    update?: room_membersUpdateWithWhereUniqueWithoutUserInput | room_membersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: room_membersUpdateManyWithWhereWithoutUserInput | room_membersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: room_membersScalarWhereInput | room_membersScalarWhereInput[]
  }

  export type locationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<locationsCreateWithoutUserInput, locationsUncheckedCreateWithoutUserInput> | locationsCreateWithoutUserInput[] | locationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: locationsCreateOrConnectWithoutUserInput | locationsCreateOrConnectWithoutUserInput[]
    upsert?: locationsUpsertWithWhereUniqueWithoutUserInput | locationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: locationsCreateManyUserInputEnvelope
    set?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    disconnect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    delete?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    connect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    update?: locationsUpdateWithWhereUniqueWithoutUserInput | locationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: locationsUpdateManyWithWhereWithoutUserInput | locationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: locationsScalarWhereInput | locationsScalarWhereInput[]
  }

  export type friendshipsUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<friendshipsCreateWithoutRequesterInput, friendshipsUncheckedCreateWithoutRequesterInput> | friendshipsCreateWithoutRequesterInput[] | friendshipsUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutRequesterInput | friendshipsCreateOrConnectWithoutRequesterInput[]
    upsert?: friendshipsUpsertWithWhereUniqueWithoutRequesterInput | friendshipsUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: friendshipsCreateManyRequesterInputEnvelope
    set?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    disconnect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    delete?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    update?: friendshipsUpdateWithWhereUniqueWithoutRequesterInput | friendshipsUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: friendshipsUpdateManyWithWhereWithoutRequesterInput | friendshipsUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
  }

  export type friendshipsUncheckedUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<friendshipsCreateWithoutAddresseeInput, friendshipsUncheckedCreateWithoutAddresseeInput> | friendshipsCreateWithoutAddresseeInput[] | friendshipsUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: friendshipsCreateOrConnectWithoutAddresseeInput | friendshipsCreateOrConnectWithoutAddresseeInput[]
    upsert?: friendshipsUpsertWithWhereUniqueWithoutAddresseeInput | friendshipsUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: friendshipsCreateManyAddresseeInputEnvelope
    set?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    disconnect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    delete?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    connect?: friendshipsWhereUniqueInput | friendshipsWhereUniqueInput[]
    update?: friendshipsUpdateWithWhereUniqueWithoutAddresseeInput | friendshipsUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: friendshipsUpdateManyWithWhereWithoutAddresseeInput | friendshipsUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
  }

  export type group_membersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput> | group_membersCreateWithoutUserInput[] | group_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutUserInput | group_membersCreateOrConnectWithoutUserInput[]
    upsert?: group_membersUpsertWithWhereUniqueWithoutUserInput | group_membersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: group_membersCreateManyUserInputEnvelope
    set?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    disconnect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    delete?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    update?: group_membersUpdateWithWhereUniqueWithoutUserInput | group_membersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: group_membersUpdateManyWithWhereWithoutUserInput | group_membersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
  }

  export type groupsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput> | groupsCreateWithoutCreatorInput[] | groupsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutCreatorInput | groupsCreateOrConnectWithoutCreatorInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutCreatorInput | groupsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: groupsCreateManyCreatorInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutCreatorInput | groupsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutCreatorInput | groupsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput> | messagesCreateWithoutSenderInput[] | messagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutSenderInput | messagesCreateOrConnectWithoutSenderInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutSenderInput | messagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: messagesCreateManySenderInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutSenderInput | messagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutSenderInput | messagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<messagesCreateWithoutReceiverInput, messagesUncheckedCreateWithoutReceiverInput> | messagesCreateWithoutReceiverInput[] | messagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutReceiverInput | messagesCreateOrConnectWithoutReceiverInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutReceiverInput | messagesUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: messagesCreateManyReceiverInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutReceiverInput | messagesUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutReceiverInput | messagesUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type room_membersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<room_membersCreateWithoutUserInput, room_membersUncheckedCreateWithoutUserInput> | room_membersCreateWithoutUserInput[] | room_membersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: room_membersCreateOrConnectWithoutUserInput | room_membersCreateOrConnectWithoutUserInput[]
    upsert?: room_membersUpsertWithWhereUniqueWithoutUserInput | room_membersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: room_membersCreateManyUserInputEnvelope
    set?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    disconnect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    delete?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    connect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    update?: room_membersUpdateWithWhereUniqueWithoutUserInput | room_membersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: room_membersUpdateManyWithWhereWithoutUserInput | room_membersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: room_membersScalarWhereInput | room_membersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutLocationsInput = {
    create?: XOR<usersCreateWithoutLocationsInput, usersUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLocationsInput
    connect?: usersWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<usersCreateWithoutLocationsInput, usersUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLocationsInput
    upsert?: usersUpsertWithoutLocationsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLocationsInput, usersUpdateWithoutLocationsInput>, usersUncheckedUpdateWithoutLocationsInput>
  }

  export type usersCreateNestedOneWithoutSentFriendshipsInput = {
    create?: XOR<usersCreateWithoutSentFriendshipsInput, usersUncheckedCreateWithoutSentFriendshipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSentFriendshipsInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReceivedFriendshipsInput = {
    create?: XOR<usersCreateWithoutReceivedFriendshipsInput, usersUncheckedCreateWithoutReceivedFriendshipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReceivedFriendshipsInput
    connect?: usersWhereUniqueInput
  }

  export type EnumFriendshipStatusFieldUpdateOperationsInput = {
    set?: $Enums.FriendshipStatus
  }

  export type usersUpdateOneRequiredWithoutSentFriendshipsNestedInput = {
    create?: XOR<usersCreateWithoutSentFriendshipsInput, usersUncheckedCreateWithoutSentFriendshipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSentFriendshipsInput
    upsert?: usersUpsertWithoutSentFriendshipsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSentFriendshipsInput, usersUpdateWithoutSentFriendshipsInput>, usersUncheckedUpdateWithoutSentFriendshipsInput>
  }

  export type usersUpdateOneRequiredWithoutReceivedFriendshipsNestedInput = {
    create?: XOR<usersCreateWithoutReceivedFriendshipsInput, usersUncheckedCreateWithoutReceivedFriendshipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReceivedFriendshipsInput
    upsert?: usersUpsertWithoutReceivedFriendshipsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReceivedFriendshipsInput, usersUpdateWithoutReceivedFriendshipsInput>, usersUncheckedUpdateWithoutReceivedFriendshipsInput>
  }

  export type usersCreateNestedOneWithoutCreatedGroupsInput = {
    create?: XOR<usersCreateWithoutCreatedGroupsInput, usersUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCreatedGroupsInput
    connect?: usersWhereUniqueInput
  }

  export type group_membersCreateNestedManyWithoutGroupInput = {
    create?: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput> | group_membersCreateWithoutGroupInput[] | group_membersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutGroupInput | group_membersCreateOrConnectWithoutGroupInput[]
    createMany?: group_membersCreateManyGroupInputEnvelope
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
  }

  export type messagesCreateNestedManyWithoutGroupInput = {
    create?: XOR<messagesCreateWithoutGroupInput, messagesUncheckedCreateWithoutGroupInput> | messagesCreateWithoutGroupInput[] | messagesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutGroupInput | messagesCreateOrConnectWithoutGroupInput[]
    createMany?: messagesCreateManyGroupInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type group_membersUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput> | group_membersCreateWithoutGroupInput[] | group_membersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutGroupInput | group_membersCreateOrConnectWithoutGroupInput[]
    createMany?: group_membersCreateManyGroupInputEnvelope
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
  }

  export type messagesUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<messagesCreateWithoutGroupInput, messagesUncheckedCreateWithoutGroupInput> | messagesCreateWithoutGroupInput[] | messagesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutGroupInput | messagesCreateOrConnectWithoutGroupInput[]
    createMany?: messagesCreateManyGroupInputEnvelope
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutCreatedGroupsNestedInput = {
    create?: XOR<usersCreateWithoutCreatedGroupsInput, usersUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCreatedGroupsInput
    upsert?: usersUpsertWithoutCreatedGroupsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCreatedGroupsInput, usersUpdateWithoutCreatedGroupsInput>, usersUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type group_membersUpdateManyWithoutGroupNestedInput = {
    create?: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput> | group_membersCreateWithoutGroupInput[] | group_membersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutGroupInput | group_membersCreateOrConnectWithoutGroupInput[]
    upsert?: group_membersUpsertWithWhereUniqueWithoutGroupInput | group_membersUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: group_membersCreateManyGroupInputEnvelope
    set?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    disconnect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    delete?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    update?: group_membersUpdateWithWhereUniqueWithoutGroupInput | group_membersUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: group_membersUpdateManyWithWhereWithoutGroupInput | group_membersUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
  }

  export type messagesUpdateManyWithoutGroupNestedInput = {
    create?: XOR<messagesCreateWithoutGroupInput, messagesUncheckedCreateWithoutGroupInput> | messagesCreateWithoutGroupInput[] | messagesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutGroupInput | messagesCreateOrConnectWithoutGroupInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutGroupInput | messagesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: messagesCreateManyGroupInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutGroupInput | messagesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutGroupInput | messagesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type group_membersUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput> | group_membersCreateWithoutGroupInput[] | group_membersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: group_membersCreateOrConnectWithoutGroupInput | group_membersCreateOrConnectWithoutGroupInput[]
    upsert?: group_membersUpsertWithWhereUniqueWithoutGroupInput | group_membersUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: group_membersCreateManyGroupInputEnvelope
    set?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    disconnect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    delete?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    connect?: group_membersWhereUniqueInput | group_membersWhereUniqueInput[]
    update?: group_membersUpdateWithWhereUniqueWithoutGroupInput | group_membersUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: group_membersUpdateManyWithWhereWithoutGroupInput | group_membersUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
  }

  export type messagesUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<messagesCreateWithoutGroupInput, messagesUncheckedCreateWithoutGroupInput> | messagesCreateWithoutGroupInput[] | messagesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: messagesCreateOrConnectWithoutGroupInput | messagesCreateOrConnectWithoutGroupInput[]
    upsert?: messagesUpsertWithWhereUniqueWithoutGroupInput | messagesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: messagesCreateManyGroupInputEnvelope
    set?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    disconnect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    delete?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    connect?: messagesWhereUniqueInput | messagesWhereUniqueInput[]
    update?: messagesUpdateWithWhereUniqueWithoutGroupInput | messagesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: messagesUpdateManyWithWhereWithoutGroupInput | messagesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: messagesScalarWhereInput | messagesScalarWhereInput[]
  }

  export type groupsCreateNestedOneWithoutMembersInput = {
    create?: XOR<groupsCreateWithoutMembersInput, groupsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: groupsCreateOrConnectWithoutMembersInput
    connect?: groupsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutGroupMembershipsInput = {
    create?: XOR<usersCreateWithoutGroupMembershipsInput, usersUncheckedCreateWithoutGroupMembershipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutGroupMembershipsInput
    connect?: usersWhereUniqueInput
  }

  export type groupsUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<groupsCreateWithoutMembersInput, groupsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: groupsCreateOrConnectWithoutMembersInput
    upsert?: groupsUpsertWithoutMembersInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutMembersInput, groupsUpdateWithoutMembersInput>, groupsUncheckedUpdateWithoutMembersInput>
  }

  export type usersUpdateOneRequiredWithoutGroupMembershipsNestedInput = {
    create?: XOR<usersCreateWithoutGroupMembershipsInput, usersUncheckedCreateWithoutGroupMembershipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutGroupMembershipsInput
    upsert?: usersUpsertWithoutGroupMembershipsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGroupMembershipsInput, usersUpdateWithoutGroupMembershipsInput>, usersUncheckedUpdateWithoutGroupMembershipsInput>
  }

  export type usersCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<usersCreateWithoutSentMessagesInput, usersUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSentMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<usersCreateWithoutReceivedMessagesInput, usersUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutReceivedMessagesInput
    connect?: usersWhereUniqueInput
  }

  export type groupsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<groupsCreateWithoutMessagesInput, groupsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutMessagesInput
    connect?: groupsWhereUniqueInput
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type usersUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<usersCreateWithoutSentMessagesInput, usersUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSentMessagesInput
    upsert?: usersUpsertWithoutSentMessagesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSentMessagesInput, usersUpdateWithoutSentMessagesInput>, usersUncheckedUpdateWithoutSentMessagesInput>
  }

  export type usersUpdateOneWithoutReceivedMessagesNestedInput = {
    create?: XOR<usersCreateWithoutReceivedMessagesInput, usersUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: usersCreateOrConnectWithoutReceivedMessagesInput
    upsert?: usersUpsertWithoutReceivedMessagesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReceivedMessagesInput, usersUpdateWithoutReceivedMessagesInput>, usersUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type groupsUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<groupsCreateWithoutMessagesInput, groupsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutMessagesInput
    upsert?: groupsUpsertWithoutMessagesInput
    disconnect?: groupsWhereInput | boolean
    delete?: groupsWhereInput | boolean
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutMessagesInput, groupsUpdateWithoutMessagesInput>, groupsUncheckedUpdateWithoutMessagesInput>
  }

  export type room_membersCreateNestedManyWithoutRoomInput = {
    create?: XOR<room_membersCreateWithoutRoomInput, room_membersUncheckedCreateWithoutRoomInput> | room_membersCreateWithoutRoomInput[] | room_membersUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: room_membersCreateOrConnectWithoutRoomInput | room_membersCreateOrConnectWithoutRoomInput[]
    createMany?: room_membersCreateManyRoomInputEnvelope
    connect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
  }

  export type room_messagesCreateNestedManyWithoutRoomInput = {
    create?: XOR<room_messagesCreateWithoutRoomInput, room_messagesUncheckedCreateWithoutRoomInput> | room_messagesCreateWithoutRoomInput[] | room_messagesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: room_messagesCreateOrConnectWithoutRoomInput | room_messagesCreateOrConnectWithoutRoomInput[]
    createMany?: room_messagesCreateManyRoomInputEnvelope
    connect?: room_messagesWhereUniqueInput | room_messagesWhereUniqueInput[]
  }

  export type room_membersUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<room_membersCreateWithoutRoomInput, room_membersUncheckedCreateWithoutRoomInput> | room_membersCreateWithoutRoomInput[] | room_membersUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: room_membersCreateOrConnectWithoutRoomInput | room_membersCreateOrConnectWithoutRoomInput[]
    createMany?: room_membersCreateManyRoomInputEnvelope
    connect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
  }

  export type room_messagesUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<room_messagesCreateWithoutRoomInput, room_messagesUncheckedCreateWithoutRoomInput> | room_messagesCreateWithoutRoomInput[] | room_messagesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: room_messagesCreateOrConnectWithoutRoomInput | room_messagesCreateOrConnectWithoutRoomInput[]
    createMany?: room_messagesCreateManyRoomInputEnvelope
    connect?: room_messagesWhereUniqueInput | room_messagesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type room_membersUpdateManyWithoutRoomNestedInput = {
    create?: XOR<room_membersCreateWithoutRoomInput, room_membersUncheckedCreateWithoutRoomInput> | room_membersCreateWithoutRoomInput[] | room_membersUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: room_membersCreateOrConnectWithoutRoomInput | room_membersCreateOrConnectWithoutRoomInput[]
    upsert?: room_membersUpsertWithWhereUniqueWithoutRoomInput | room_membersUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: room_membersCreateManyRoomInputEnvelope
    set?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    disconnect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    delete?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    connect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    update?: room_membersUpdateWithWhereUniqueWithoutRoomInput | room_membersUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: room_membersUpdateManyWithWhereWithoutRoomInput | room_membersUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: room_membersScalarWhereInput | room_membersScalarWhereInput[]
  }

  export type room_messagesUpdateManyWithoutRoomNestedInput = {
    create?: XOR<room_messagesCreateWithoutRoomInput, room_messagesUncheckedCreateWithoutRoomInput> | room_messagesCreateWithoutRoomInput[] | room_messagesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: room_messagesCreateOrConnectWithoutRoomInput | room_messagesCreateOrConnectWithoutRoomInput[]
    upsert?: room_messagesUpsertWithWhereUniqueWithoutRoomInput | room_messagesUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: room_messagesCreateManyRoomInputEnvelope
    set?: room_messagesWhereUniqueInput | room_messagesWhereUniqueInput[]
    disconnect?: room_messagesWhereUniqueInput | room_messagesWhereUniqueInput[]
    delete?: room_messagesWhereUniqueInput | room_messagesWhereUniqueInput[]
    connect?: room_messagesWhereUniqueInput | room_messagesWhereUniqueInput[]
    update?: room_messagesUpdateWithWhereUniqueWithoutRoomInput | room_messagesUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: room_messagesUpdateManyWithWhereWithoutRoomInput | room_messagesUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: room_messagesScalarWhereInput | room_messagesScalarWhereInput[]
  }

  export type room_membersUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<room_membersCreateWithoutRoomInput, room_membersUncheckedCreateWithoutRoomInput> | room_membersCreateWithoutRoomInput[] | room_membersUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: room_membersCreateOrConnectWithoutRoomInput | room_membersCreateOrConnectWithoutRoomInput[]
    upsert?: room_membersUpsertWithWhereUniqueWithoutRoomInput | room_membersUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: room_membersCreateManyRoomInputEnvelope
    set?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    disconnect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    delete?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    connect?: room_membersWhereUniqueInput | room_membersWhereUniqueInput[]
    update?: room_membersUpdateWithWhereUniqueWithoutRoomInput | room_membersUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: room_membersUpdateManyWithWhereWithoutRoomInput | room_membersUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: room_membersScalarWhereInput | room_membersScalarWhereInput[]
  }

  export type room_messagesUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<room_messagesCreateWithoutRoomInput, room_messagesUncheckedCreateWithoutRoomInput> | room_messagesCreateWithoutRoomInput[] | room_messagesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: room_messagesCreateOrConnectWithoutRoomInput | room_messagesCreateOrConnectWithoutRoomInput[]
    upsert?: room_messagesUpsertWithWhereUniqueWithoutRoomInput | room_messagesUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: room_messagesCreateManyRoomInputEnvelope
    set?: room_messagesWhereUniqueInput | room_messagesWhereUniqueInput[]
    disconnect?: room_messagesWhereUniqueInput | room_messagesWhereUniqueInput[]
    delete?: room_messagesWhereUniqueInput | room_messagesWhereUniqueInput[]
    connect?: room_messagesWhereUniqueInput | room_messagesWhereUniqueInput[]
    update?: room_messagesUpdateWithWhereUniqueWithoutRoomInput | room_messagesUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: room_messagesUpdateManyWithWhereWithoutRoomInput | room_messagesUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: room_messagesScalarWhereInput | room_messagesScalarWhereInput[]
  }

  export type roomsCreateNestedOneWithoutMembersInput = {
    create?: XOR<roomsCreateWithoutMembersInput, roomsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: roomsCreateOrConnectWithoutMembersInput
    connect?: roomsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRoomMembershipsInput = {
    create?: XOR<usersCreateWithoutRoomMembershipsInput, usersUncheckedCreateWithoutRoomMembershipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutRoomMembershipsInput
    connect?: usersWhereUniqueInput
  }

  export type roomsUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<roomsCreateWithoutMembersInput, roomsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: roomsCreateOrConnectWithoutMembersInput
    upsert?: roomsUpsertWithoutMembersInput
    connect?: roomsWhereUniqueInput
    update?: XOR<XOR<roomsUpdateToOneWithWhereWithoutMembersInput, roomsUpdateWithoutMembersInput>, roomsUncheckedUpdateWithoutMembersInput>
  }

  export type usersUpdateOneRequiredWithoutRoomMembershipsNestedInput = {
    create?: XOR<usersCreateWithoutRoomMembershipsInput, usersUncheckedCreateWithoutRoomMembershipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutRoomMembershipsInput
    upsert?: usersUpsertWithoutRoomMembershipsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRoomMembershipsInput, usersUpdateWithoutRoomMembershipsInput>, usersUncheckedUpdateWithoutRoomMembershipsInput>
  }

  export type roomsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<roomsCreateWithoutMessagesInput, roomsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: roomsCreateOrConnectWithoutMessagesInput
    connect?: roomsWhereUniqueInput
  }

  export type roomsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<roomsCreateWithoutMessagesInput, roomsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: roomsCreateOrConnectWithoutMessagesInput
    upsert?: roomsUpsertWithoutMessagesInput
    connect?: roomsWhereUniqueInput
    update?: XOR<XOR<roomsUpdateToOneWithWhereWithoutMessagesInput, roomsUpdateWithoutMessagesInput>, roomsUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumFriendshipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusFilter<$PrismaModel> | $Enums.FriendshipStatus
  }

  export type NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FriendshipStatus | EnumFriendshipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FriendshipStatus[] | ListEnumFriendshipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFriendshipStatusWithAggregatesFilter<$PrismaModel> | $Enums.FriendshipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFriendshipStatusFilter<$PrismaModel>
    _max?: NestedEnumFriendshipStatusFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type locationsCreateWithoutUserInput = {
    id?: string
    latitude: number
    longitude: number
    accuracy?: number | null
    isActive?: boolean
    timestamp?: Date | string
  }

  export type locationsUncheckedCreateWithoutUserInput = {
    id?: string
    latitude: number
    longitude: number
    accuracy?: number | null
    isActive?: boolean
    timestamp?: Date | string
  }

  export type locationsCreateOrConnectWithoutUserInput = {
    where: locationsWhereUniqueInput
    create: XOR<locationsCreateWithoutUserInput, locationsUncheckedCreateWithoutUserInput>
  }

  export type locationsCreateManyUserInputEnvelope = {
    data: locationsCreateManyUserInput | locationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type friendshipsCreateWithoutRequesterInput = {
    id?: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    addressee: usersCreateNestedOneWithoutReceivedFriendshipsInput
  }

  export type friendshipsUncheckedCreateWithoutRequesterInput = {
    id?: string
    addresseeId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type friendshipsCreateOrConnectWithoutRequesterInput = {
    where: friendshipsWhereUniqueInput
    create: XOR<friendshipsCreateWithoutRequesterInput, friendshipsUncheckedCreateWithoutRequesterInput>
  }

  export type friendshipsCreateManyRequesterInputEnvelope = {
    data: friendshipsCreateManyRequesterInput | friendshipsCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type friendshipsCreateWithoutAddresseeInput = {
    id?: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: usersCreateNestedOneWithoutSentFriendshipsInput
  }

  export type friendshipsUncheckedCreateWithoutAddresseeInput = {
    id?: string
    requesterId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type friendshipsCreateOrConnectWithoutAddresseeInput = {
    where: friendshipsWhereUniqueInput
    create: XOR<friendshipsCreateWithoutAddresseeInput, friendshipsUncheckedCreateWithoutAddresseeInput>
  }

  export type friendshipsCreateManyAddresseeInputEnvelope = {
    data: friendshipsCreateManyAddresseeInput | friendshipsCreateManyAddresseeInput[]
    skipDuplicates?: boolean
  }

  export type group_membersCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    group: groupsCreateNestedOneWithoutMembersInput
  }

  export type group_membersUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    joinedAt?: Date | string
  }

  export type group_membersCreateOrConnectWithoutUserInput = {
    where: group_membersWhereUniqueInput
    create: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput>
  }

  export type group_membersCreateManyUserInputEnvelope = {
    data: group_membersCreateManyUserInput | group_membersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type groupsCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: group_membersCreateNestedManyWithoutGroupInput
    messages?: messagesCreateNestedManyWithoutGroupInput
  }

  export type groupsUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: group_membersUncheckedCreateNestedManyWithoutGroupInput
    messages?: messagesUncheckedCreateNestedManyWithoutGroupInput
  }

  export type groupsCreateOrConnectWithoutCreatorInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput>
  }

  export type groupsCreateManyCreatorInputEnvelope = {
    data: groupsCreateManyCreatorInput | groupsCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutSenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    receiver?: usersCreateNestedOneWithoutReceivedMessagesInput
    group?: groupsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    groupId?: string | null
    receiverId?: string | null
    createdAt?: Date | string
  }

  export type messagesCreateOrConnectWithoutSenderInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput>
  }

  export type messagesCreateManySenderInputEnvelope = {
    data: messagesCreateManySenderInput | messagesCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutReceiverInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    sender: usersCreateNestedOneWithoutSentMessagesInput
    group?: groupsCreateNestedOneWithoutMessagesInput
  }

  export type messagesUncheckedCreateWithoutReceiverInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    senderId: string
    groupId?: string | null
    createdAt?: Date | string
  }

  export type messagesCreateOrConnectWithoutReceiverInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutReceiverInput, messagesUncheckedCreateWithoutReceiverInput>
  }

  export type messagesCreateManyReceiverInputEnvelope = {
    data: messagesCreateManyReceiverInput | messagesCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type room_membersCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    room: roomsCreateNestedOneWithoutMembersInput
  }

  export type room_membersUncheckedCreateWithoutUserInput = {
    id?: string
    roomId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type room_membersCreateOrConnectWithoutUserInput = {
    where: room_membersWhereUniqueInput
    create: XOR<room_membersCreateWithoutUserInput, room_membersUncheckedCreateWithoutUserInput>
  }

  export type room_membersCreateManyUserInputEnvelope = {
    data: room_membersCreateManyUserInput | room_membersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type locationsUpsertWithWhereUniqueWithoutUserInput = {
    where: locationsWhereUniqueInput
    update: XOR<locationsUpdateWithoutUserInput, locationsUncheckedUpdateWithoutUserInput>
    create: XOR<locationsCreateWithoutUserInput, locationsUncheckedCreateWithoutUserInput>
  }

  export type locationsUpdateWithWhereUniqueWithoutUserInput = {
    where: locationsWhereUniqueInput
    data: XOR<locationsUpdateWithoutUserInput, locationsUncheckedUpdateWithoutUserInput>
  }

  export type locationsUpdateManyWithWhereWithoutUserInput = {
    where: locationsScalarWhereInput
    data: XOR<locationsUpdateManyMutationInput, locationsUncheckedUpdateManyWithoutUserInput>
  }

  export type locationsScalarWhereInput = {
    AND?: locationsScalarWhereInput | locationsScalarWhereInput[]
    OR?: locationsScalarWhereInput[]
    NOT?: locationsScalarWhereInput | locationsScalarWhereInput[]
    id?: StringFilter<"locations"> | string
    userId?: StringFilter<"locations"> | string
    latitude?: FloatFilter<"locations"> | number
    longitude?: FloatFilter<"locations"> | number
    accuracy?: FloatNullableFilter<"locations"> | number | null
    isActive?: BoolFilter<"locations"> | boolean
    timestamp?: DateTimeFilter<"locations"> | Date | string
  }

  export type friendshipsUpsertWithWhereUniqueWithoutRequesterInput = {
    where: friendshipsWhereUniqueInput
    update: XOR<friendshipsUpdateWithoutRequesterInput, friendshipsUncheckedUpdateWithoutRequesterInput>
    create: XOR<friendshipsCreateWithoutRequesterInput, friendshipsUncheckedCreateWithoutRequesterInput>
  }

  export type friendshipsUpdateWithWhereUniqueWithoutRequesterInput = {
    where: friendshipsWhereUniqueInput
    data: XOR<friendshipsUpdateWithoutRequesterInput, friendshipsUncheckedUpdateWithoutRequesterInput>
  }

  export type friendshipsUpdateManyWithWhereWithoutRequesterInput = {
    where: friendshipsScalarWhereInput
    data: XOR<friendshipsUpdateManyMutationInput, friendshipsUncheckedUpdateManyWithoutRequesterInput>
  }

  export type friendshipsScalarWhereInput = {
    AND?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
    OR?: friendshipsScalarWhereInput[]
    NOT?: friendshipsScalarWhereInput | friendshipsScalarWhereInput[]
    id?: StringFilter<"friendships"> | string
    requesterId?: StringFilter<"friendships"> | string
    addresseeId?: StringFilter<"friendships"> | string
    status?: EnumFriendshipStatusFilter<"friendships"> | $Enums.FriendshipStatus
    createdAt?: DateTimeFilter<"friendships"> | Date | string
    updatedAt?: DateTimeFilter<"friendships"> | Date | string
  }

  export type friendshipsUpsertWithWhereUniqueWithoutAddresseeInput = {
    where: friendshipsWhereUniqueInput
    update: XOR<friendshipsUpdateWithoutAddresseeInput, friendshipsUncheckedUpdateWithoutAddresseeInput>
    create: XOR<friendshipsCreateWithoutAddresseeInput, friendshipsUncheckedCreateWithoutAddresseeInput>
  }

  export type friendshipsUpdateWithWhereUniqueWithoutAddresseeInput = {
    where: friendshipsWhereUniqueInput
    data: XOR<friendshipsUpdateWithoutAddresseeInput, friendshipsUncheckedUpdateWithoutAddresseeInput>
  }

  export type friendshipsUpdateManyWithWhereWithoutAddresseeInput = {
    where: friendshipsScalarWhereInput
    data: XOR<friendshipsUpdateManyMutationInput, friendshipsUncheckedUpdateManyWithoutAddresseeInput>
  }

  export type group_membersUpsertWithWhereUniqueWithoutUserInput = {
    where: group_membersWhereUniqueInput
    update: XOR<group_membersUpdateWithoutUserInput, group_membersUncheckedUpdateWithoutUserInput>
    create: XOR<group_membersCreateWithoutUserInput, group_membersUncheckedCreateWithoutUserInput>
  }

  export type group_membersUpdateWithWhereUniqueWithoutUserInput = {
    where: group_membersWhereUniqueInput
    data: XOR<group_membersUpdateWithoutUserInput, group_membersUncheckedUpdateWithoutUserInput>
  }

  export type group_membersUpdateManyWithWhereWithoutUserInput = {
    where: group_membersScalarWhereInput
    data: XOR<group_membersUpdateManyMutationInput, group_membersUncheckedUpdateManyWithoutUserInput>
  }

  export type group_membersScalarWhereInput = {
    AND?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
    OR?: group_membersScalarWhereInput[]
    NOT?: group_membersScalarWhereInput | group_membersScalarWhereInput[]
    id?: StringFilter<"group_members"> | string
    groupId?: StringFilter<"group_members"> | string
    userId?: StringFilter<"group_members"> | string
    joinedAt?: DateTimeFilter<"group_members"> | Date | string
  }

  export type groupsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: groupsWhereUniqueInput
    update: XOR<groupsUpdateWithoutCreatorInput, groupsUncheckedUpdateWithoutCreatorInput>
    create: XOR<groupsCreateWithoutCreatorInput, groupsUncheckedCreateWithoutCreatorInput>
  }

  export type groupsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: groupsWhereUniqueInput
    data: XOR<groupsUpdateWithoutCreatorInput, groupsUncheckedUpdateWithoutCreatorInput>
  }

  export type groupsUpdateManyWithWhereWithoutCreatorInput = {
    where: groupsScalarWhereInput
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyWithoutCreatorInput>
  }

  export type groupsScalarWhereInput = {
    AND?: groupsScalarWhereInput | groupsScalarWhereInput[]
    OR?: groupsScalarWhereInput[]
    NOT?: groupsScalarWhereInput | groupsScalarWhereInput[]
    id?: StringFilter<"groups"> | string
    name?: StringFilter<"groups"> | string
    description?: StringNullableFilter<"groups"> | string | null
    creatorId?: StringFilter<"groups"> | string
    createdAt?: DateTimeFilter<"groups"> | Date | string
    updatedAt?: DateTimeFilter<"groups"> | Date | string
  }

  export type messagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutSenderInput, messagesUncheckedUpdateWithoutSenderInput>
    create: XOR<messagesCreateWithoutSenderInput, messagesUncheckedCreateWithoutSenderInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutSenderInput, messagesUncheckedUpdateWithoutSenderInput>
  }

  export type messagesUpdateManyWithWhereWithoutSenderInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutSenderInput>
  }

  export type messagesScalarWhereInput = {
    AND?: messagesScalarWhereInput | messagesScalarWhereInput[]
    OR?: messagesScalarWhereInput[]
    NOT?: messagesScalarWhereInput | messagesScalarWhereInput[]
    id?: StringFilter<"messages"> | string
    content?: StringFilter<"messages"> | string
    type?: EnumMessageTypeFilter<"messages"> | $Enums.MessageType
    senderId?: StringFilter<"messages"> | string
    groupId?: StringNullableFilter<"messages"> | string | null
    receiverId?: StringNullableFilter<"messages"> | string | null
    createdAt?: DateTimeFilter<"messages"> | Date | string
  }

  export type messagesUpsertWithWhereUniqueWithoutReceiverInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutReceiverInput, messagesUncheckedUpdateWithoutReceiverInput>
    create: XOR<messagesCreateWithoutReceiverInput, messagesUncheckedCreateWithoutReceiverInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutReceiverInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutReceiverInput, messagesUncheckedUpdateWithoutReceiverInput>
  }

  export type messagesUpdateManyWithWhereWithoutReceiverInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutReceiverInput>
  }

  export type room_membersUpsertWithWhereUniqueWithoutUserInput = {
    where: room_membersWhereUniqueInput
    update: XOR<room_membersUpdateWithoutUserInput, room_membersUncheckedUpdateWithoutUserInput>
    create: XOR<room_membersCreateWithoutUserInput, room_membersUncheckedCreateWithoutUserInput>
  }

  export type room_membersUpdateWithWhereUniqueWithoutUserInput = {
    where: room_membersWhereUniqueInput
    data: XOR<room_membersUpdateWithoutUserInput, room_membersUncheckedUpdateWithoutUserInput>
  }

  export type room_membersUpdateManyWithWhereWithoutUserInput = {
    where: room_membersScalarWhereInput
    data: XOR<room_membersUpdateManyMutationInput, room_membersUncheckedUpdateManyWithoutUserInput>
  }

  export type room_membersScalarWhereInput = {
    AND?: room_membersScalarWhereInput | room_membersScalarWhereInput[]
    OR?: room_membersScalarWhereInput[]
    NOT?: room_membersScalarWhereInput | room_membersScalarWhereInput[]
    id?: StringFilter<"room_members"> | string
    roomId?: StringFilter<"room_members"> | string
    userId?: StringFilter<"room_members"> | string
    joinedAt?: DateTimeFilter<"room_members"> | Date | string
    leftAt?: DateTimeNullableFilter<"room_members"> | Date | string | null
  }

  export type usersCreateWithoutLocationsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sentFriendships?: friendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersCreateNestedManyWithoutUserInput
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutLocationsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sentFriendships?: friendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesUncheckedCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutLocationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLocationsInput, usersUncheckedCreateWithoutLocationsInput>
  }

  export type usersUpsertWithoutLocationsInput = {
    update: XOR<usersUpdateWithoutLocationsInput, usersUncheckedUpdateWithoutLocationsInput>
    create: XOR<usersCreateWithoutLocationsInput, usersUncheckedCreateWithoutLocationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLocationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLocationsInput, usersUncheckedUpdateWithoutLocationsInput>
  }

  export type usersUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentFriendships?: friendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentFriendships?: friendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUncheckedUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutSentFriendshipsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsCreateNestedManyWithoutUserInput
    receivedFriendships?: friendshipsCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersCreateNestedManyWithoutUserInput
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSentFriendshipsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsUncheckedCreateNestedManyWithoutUserInput
    receivedFriendships?: friendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesUncheckedCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSentFriendshipsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSentFriendshipsInput, usersUncheckedCreateWithoutSentFriendshipsInput>
  }

  export type usersCreateWithoutReceivedFriendshipsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsCreateNestedManyWithoutRequesterInput
    groupMemberships?: group_membersCreateNestedManyWithoutUserInput
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutReceivedFriendshipsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsUncheckedCreateNestedManyWithoutRequesterInput
    groupMemberships?: group_membersUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesUncheckedCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutReceivedFriendshipsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReceivedFriendshipsInput, usersUncheckedCreateWithoutReceivedFriendshipsInput>
  }

  export type usersUpsertWithoutSentFriendshipsInput = {
    update: XOR<usersUpdateWithoutSentFriendshipsInput, usersUncheckedUpdateWithoutSentFriendshipsInput>
    create: XOR<usersCreateWithoutSentFriendshipsInput, usersUncheckedCreateWithoutSentFriendshipsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSentFriendshipsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSentFriendshipsInput, usersUncheckedUpdateWithoutSentFriendshipsInput>
  }

  export type usersUpdateWithoutSentFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateManyWithoutUserNestedInput
    receivedFriendships?: friendshipsUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSentFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUncheckedUpdateManyWithoutUserNestedInput
    receivedFriendships?: friendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUncheckedUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithoutReceivedFriendshipsInput = {
    update: XOR<usersUpdateWithoutReceivedFriendshipsInput, usersUncheckedUpdateWithoutReceivedFriendshipsInput>
    create: XOR<usersCreateWithoutReceivedFriendshipsInput, usersUncheckedCreateWithoutReceivedFriendshipsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReceivedFriendshipsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReceivedFriendshipsInput, usersUncheckedUpdateWithoutReceivedFriendshipsInput>
  }

  export type usersUpdateWithoutReceivedFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUpdateManyWithoutRequesterNestedInput
    groupMemberships?: group_membersUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutReceivedFriendshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    groupMemberships?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUncheckedUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutCreatedGroupsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersCreateNestedManyWithoutUserInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCreatedGroupsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesUncheckedCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCreatedGroupsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCreatedGroupsInput, usersUncheckedCreateWithoutCreatedGroupsInput>
  }

  export type group_membersCreateWithoutGroupInput = {
    id?: string
    joinedAt?: Date | string
    user: usersCreateNestedOneWithoutGroupMembershipsInput
  }

  export type group_membersUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
  }

  export type group_membersCreateOrConnectWithoutGroupInput = {
    where: group_membersWhereUniqueInput
    create: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput>
  }

  export type group_membersCreateManyGroupInputEnvelope = {
    data: group_membersCreateManyGroupInput | group_membersCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type messagesCreateWithoutGroupInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
    sender: usersCreateNestedOneWithoutSentMessagesInput
    receiver?: usersCreateNestedOneWithoutReceivedMessagesInput
  }

  export type messagesUncheckedCreateWithoutGroupInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    senderId: string
    receiverId?: string | null
    createdAt?: Date | string
  }

  export type messagesCreateOrConnectWithoutGroupInput = {
    where: messagesWhereUniqueInput
    create: XOR<messagesCreateWithoutGroupInput, messagesUncheckedCreateWithoutGroupInput>
  }

  export type messagesCreateManyGroupInputEnvelope = {
    data: messagesCreateManyGroupInput | messagesCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutCreatedGroupsInput = {
    update: XOR<usersUpdateWithoutCreatedGroupsInput, usersUncheckedUpdateWithoutCreatedGroupsInput>
    create: XOR<usersCreateWithoutCreatedGroupsInput, usersUncheckedCreateWithoutCreatedGroupsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCreatedGroupsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCreatedGroupsInput, usersUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type usersUpdateWithoutCreatedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUpdateManyWithoutUserNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCreatedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUncheckedUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type group_membersUpsertWithWhereUniqueWithoutGroupInput = {
    where: group_membersWhereUniqueInput
    update: XOR<group_membersUpdateWithoutGroupInput, group_membersUncheckedUpdateWithoutGroupInput>
    create: XOR<group_membersCreateWithoutGroupInput, group_membersUncheckedCreateWithoutGroupInput>
  }

  export type group_membersUpdateWithWhereUniqueWithoutGroupInput = {
    where: group_membersWhereUniqueInput
    data: XOR<group_membersUpdateWithoutGroupInput, group_membersUncheckedUpdateWithoutGroupInput>
  }

  export type group_membersUpdateManyWithWhereWithoutGroupInput = {
    where: group_membersScalarWhereInput
    data: XOR<group_membersUpdateManyMutationInput, group_membersUncheckedUpdateManyWithoutGroupInput>
  }

  export type messagesUpsertWithWhereUniqueWithoutGroupInput = {
    where: messagesWhereUniqueInput
    update: XOR<messagesUpdateWithoutGroupInput, messagesUncheckedUpdateWithoutGroupInput>
    create: XOR<messagesCreateWithoutGroupInput, messagesUncheckedCreateWithoutGroupInput>
  }

  export type messagesUpdateWithWhereUniqueWithoutGroupInput = {
    where: messagesWhereUniqueInput
    data: XOR<messagesUpdateWithoutGroupInput, messagesUncheckedUpdateWithoutGroupInput>
  }

  export type messagesUpdateManyWithWhereWithoutGroupInput = {
    where: messagesScalarWhereInput
    data: XOR<messagesUpdateManyMutationInput, messagesUncheckedUpdateManyWithoutGroupInput>
  }

  export type groupsCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: usersCreateNestedOneWithoutCreatedGroupsInput
    messages?: messagesCreateNestedManyWithoutGroupInput
  }

  export type groupsUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: messagesUncheckedCreateNestedManyWithoutGroupInput
  }

  export type groupsCreateOrConnectWithoutMembersInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutMembersInput, groupsUncheckedCreateWithoutMembersInput>
  }

  export type usersCreateWithoutGroupMembershipsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsCreateNestedManyWithoutAddresseeInput
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutGroupMembershipsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesUncheckedCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutGroupMembershipsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGroupMembershipsInput, usersUncheckedCreateWithoutGroupMembershipsInput>
  }

  export type groupsUpsertWithoutMembersInput = {
    update: XOR<groupsUpdateWithoutMembersInput, groupsUncheckedUpdateWithoutMembersInput>
    create: XOR<groupsCreateWithoutMembersInput, groupsUncheckedCreateWithoutMembersInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutMembersInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutMembersInput, groupsUncheckedUpdateWithoutMembersInput>
  }

  export type groupsUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: usersUpdateOneRequiredWithoutCreatedGroupsNestedInput
    messages?: messagesUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messagesUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type usersUpsertWithoutGroupMembershipsInput = {
    update: XOR<usersUpdateWithoutGroupMembershipsInput, usersUncheckedUpdateWithoutGroupMembershipsInput>
    create: XOR<usersCreateWithoutGroupMembershipsInput, usersUncheckedCreateWithoutGroupMembershipsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGroupMembershipsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGroupMembershipsInput, usersUncheckedUpdateWithoutGroupMembershipsInput>
  }

  export type usersUpdateWithoutGroupMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUpdateManyWithoutAddresseeNestedInput
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutGroupMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUncheckedUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutSentMessagesInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersCreateNestedManyWithoutUserInput
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    receivedMessages?: messagesCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    receivedMessages?: messagesUncheckedCreateNestedManyWithoutReceiverInput
    roomMemberships?: room_membersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSentMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSentMessagesInput, usersUncheckedCreateWithoutSentMessagesInput>
  }

  export type usersCreateWithoutReceivedMessagesInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersCreateNestedManyWithoutUserInput
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    roomMemberships?: room_membersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    roomMemberships?: room_membersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutReceivedMessagesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReceivedMessagesInput, usersUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type groupsCreateWithoutMessagesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: usersCreateNestedOneWithoutCreatedGroupsInput
    members?: group_membersCreateNestedManyWithoutGroupInput
  }

  export type groupsUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    description?: string | null
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: group_membersUncheckedCreateNestedManyWithoutGroupInput
  }

  export type groupsCreateOrConnectWithoutMessagesInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutMessagesInput, groupsUncheckedCreateWithoutMessagesInput>
  }

  export type usersUpsertWithoutSentMessagesInput = {
    update: XOR<usersUpdateWithoutSentMessagesInput, usersUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<usersCreateWithoutSentMessagesInput, usersUncheckedCreateWithoutSentMessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSentMessagesInput, usersUncheckedUpdateWithoutSentMessagesInput>
  }

  export type usersUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    receivedMessages?: messagesUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    receivedMessages?: messagesUncheckedUpdateManyWithoutReceiverNestedInput
    roomMemberships?: room_membersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUpsertWithoutReceivedMessagesInput = {
    update: XOR<usersUpdateWithoutReceivedMessagesInput, usersUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<usersCreateWithoutReceivedMessagesInput, usersUncheckedCreateWithoutReceivedMessagesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReceivedMessagesInput, usersUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type usersUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    roomMemberships?: room_membersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    roomMemberships?: room_membersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type groupsUpsertWithoutMessagesInput = {
    update: XOR<groupsUpdateWithoutMessagesInput, groupsUncheckedUpdateWithoutMessagesInput>
    create: XOR<groupsCreateWithoutMessagesInput, groupsUncheckedCreateWithoutMessagesInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutMessagesInput, groupsUncheckedUpdateWithoutMessagesInput>
  }

  export type groupsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: usersUpdateOneRequiredWithoutCreatedGroupsNestedInput
    members?: group_membersUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: group_membersUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type room_membersCreateWithoutRoomInput = {
    id?: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
    user: usersCreateNestedOneWithoutRoomMembershipsInput
  }

  export type room_membersUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type room_membersCreateOrConnectWithoutRoomInput = {
    where: room_membersWhereUniqueInput
    create: XOR<room_membersCreateWithoutRoomInput, room_membersUncheckedCreateWithoutRoomInput>
  }

  export type room_membersCreateManyRoomInputEnvelope = {
    data: room_membersCreateManyRoomInput | room_membersCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type room_messagesCreateWithoutRoomInput = {
    id?: string
    senderId: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type room_messagesUncheckedCreateWithoutRoomInput = {
    id?: string
    senderId: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type room_messagesCreateOrConnectWithoutRoomInput = {
    where: room_messagesWhereUniqueInput
    create: XOR<room_messagesCreateWithoutRoomInput, room_messagesUncheckedCreateWithoutRoomInput>
  }

  export type room_messagesCreateManyRoomInputEnvelope = {
    data: room_messagesCreateManyRoomInput | room_messagesCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type room_membersUpsertWithWhereUniqueWithoutRoomInput = {
    where: room_membersWhereUniqueInput
    update: XOR<room_membersUpdateWithoutRoomInput, room_membersUncheckedUpdateWithoutRoomInput>
    create: XOR<room_membersCreateWithoutRoomInput, room_membersUncheckedCreateWithoutRoomInput>
  }

  export type room_membersUpdateWithWhereUniqueWithoutRoomInput = {
    where: room_membersWhereUniqueInput
    data: XOR<room_membersUpdateWithoutRoomInput, room_membersUncheckedUpdateWithoutRoomInput>
  }

  export type room_membersUpdateManyWithWhereWithoutRoomInput = {
    where: room_membersScalarWhereInput
    data: XOR<room_membersUpdateManyMutationInput, room_membersUncheckedUpdateManyWithoutRoomInput>
  }

  export type room_messagesUpsertWithWhereUniqueWithoutRoomInput = {
    where: room_messagesWhereUniqueInput
    update: XOR<room_messagesUpdateWithoutRoomInput, room_messagesUncheckedUpdateWithoutRoomInput>
    create: XOR<room_messagesCreateWithoutRoomInput, room_messagesUncheckedCreateWithoutRoomInput>
  }

  export type room_messagesUpdateWithWhereUniqueWithoutRoomInput = {
    where: room_messagesWhereUniqueInput
    data: XOR<room_messagesUpdateWithoutRoomInput, room_messagesUncheckedUpdateWithoutRoomInput>
  }

  export type room_messagesUpdateManyWithWhereWithoutRoomInput = {
    where: room_messagesScalarWhereInput
    data: XOR<room_messagesUpdateManyMutationInput, room_messagesUncheckedUpdateManyWithoutRoomInput>
  }

  export type room_messagesScalarWhereInput = {
    AND?: room_messagesScalarWhereInput | room_messagesScalarWhereInput[]
    OR?: room_messagesScalarWhereInput[]
    NOT?: room_messagesScalarWhereInput | room_messagesScalarWhereInput[]
    id?: StringFilter<"room_messages"> | string
    roomId?: StringFilter<"room_messages"> | string
    senderId?: StringFilter<"room_messages"> | string
    content?: StringFilter<"room_messages"> | string
    type?: EnumMessageTypeFilter<"room_messages"> | $Enums.MessageType
    createdAt?: DateTimeFilter<"room_messages"> | Date | string
  }

  export type roomsCreateWithoutMembersInput = {
    id?: string
    code: string
    name?: string | null
    destinationLat?: number | null
    destinationLng?: number | null
    destinationName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    messages?: room_messagesCreateNestedManyWithoutRoomInput
  }

  export type roomsUncheckedCreateWithoutMembersInput = {
    id?: string
    code: string
    name?: string | null
    destinationLat?: number | null
    destinationLng?: number | null
    destinationName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    messages?: room_messagesUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomsCreateOrConnectWithoutMembersInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutMembersInput, roomsUncheckedCreateWithoutMembersInput>
  }

  export type usersCreateWithoutRoomMembershipsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersCreateNestedManyWithoutUserInput
    createdGroups?: groupsCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesCreateNestedManyWithoutReceiverInput
  }

  export type usersUncheckedCreateWithoutRoomMembershipsInput = {
    id?: string
    email?: string | null
    name?: string | null
    avatar?: string | null
    characterType?: string
    characterColor?: string
    locationSharingEnabled?: boolean
    isAnonymous?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsUncheckedCreateNestedManyWithoutUserInput
    sentFriendships?: friendshipsUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendships?: friendshipsUncheckedCreateNestedManyWithoutAddresseeInput
    groupMemberships?: group_membersUncheckedCreateNestedManyWithoutUserInput
    createdGroups?: groupsUncheckedCreateNestedManyWithoutCreatorInput
    sentMessages?: messagesUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: messagesUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type usersCreateOrConnectWithoutRoomMembershipsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRoomMembershipsInput, usersUncheckedCreateWithoutRoomMembershipsInput>
  }

  export type roomsUpsertWithoutMembersInput = {
    update: XOR<roomsUpdateWithoutMembersInput, roomsUncheckedUpdateWithoutMembersInput>
    create: XOR<roomsCreateWithoutMembersInput, roomsUncheckedCreateWithoutMembersInput>
    where?: roomsWhereInput
  }

  export type roomsUpdateToOneWithWhereWithoutMembersInput = {
    where?: roomsWhereInput
    data: XOR<roomsUpdateWithoutMembersInput, roomsUncheckedUpdateWithoutMembersInput>
  }

  export type roomsUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    destinationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: room_messagesUpdateManyWithoutRoomNestedInput
  }

  export type roomsUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    destinationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    messages?: room_messagesUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type usersUpsertWithoutRoomMembershipsInput = {
    update: XOR<usersUpdateWithoutRoomMembershipsInput, usersUncheckedUpdateWithoutRoomMembershipsInput>
    create: XOR<usersCreateWithoutRoomMembershipsInput, usersUncheckedCreateWithoutRoomMembershipsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRoomMembershipsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRoomMembershipsInput, usersUncheckedUpdateWithoutRoomMembershipsInput>
  }

  export type usersUpdateWithoutRoomMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUpdateManyWithoutReceiverNestedInput
  }

  export type usersUncheckedUpdateWithoutRoomMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    characterType?: StringFieldUpdateOperationsInput | string
    characterColor?: StringFieldUpdateOperationsInput | string
    locationSharingEnabled?: BoolFieldUpdateOperationsInput | boolean
    isAnonymous?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUncheckedUpdateManyWithoutUserNestedInput
    sentFriendships?: friendshipsUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendships?: friendshipsUncheckedUpdateManyWithoutAddresseeNestedInput
    groupMemberships?: group_membersUncheckedUpdateManyWithoutUserNestedInput
    createdGroups?: groupsUncheckedUpdateManyWithoutCreatorNestedInput
    sentMessages?: messagesUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: messagesUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type roomsCreateWithoutMessagesInput = {
    id?: string
    code: string
    name?: string | null
    destinationLat?: number | null
    destinationLng?: number | null
    destinationName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    members?: room_membersCreateNestedManyWithoutRoomInput
  }

  export type roomsUncheckedCreateWithoutMessagesInput = {
    id?: string
    code: string
    name?: string | null
    destinationLat?: number | null
    destinationLng?: number | null
    destinationName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    members?: room_membersUncheckedCreateNestedManyWithoutRoomInput
  }

  export type roomsCreateOrConnectWithoutMessagesInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutMessagesInput, roomsUncheckedCreateWithoutMessagesInput>
  }

  export type roomsUpsertWithoutMessagesInput = {
    update: XOR<roomsUpdateWithoutMessagesInput, roomsUncheckedUpdateWithoutMessagesInput>
    create: XOR<roomsCreateWithoutMessagesInput, roomsUncheckedCreateWithoutMessagesInput>
    where?: roomsWhereInput
  }

  export type roomsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: roomsWhereInput
    data: XOR<roomsUpdateWithoutMessagesInput, roomsUncheckedUpdateWithoutMessagesInput>
  }

  export type roomsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    destinationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: room_membersUpdateManyWithoutRoomNestedInput
  }

  export type roomsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    destinationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: room_membersUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type locationsCreateManyUserInput = {
    id?: string
    latitude: number
    longitude: number
    accuracy?: number | null
    isActive?: boolean
    timestamp?: Date | string
  }

  export type friendshipsCreateManyRequesterInput = {
    id?: string
    addresseeId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type friendshipsCreateManyAddresseeInput = {
    id?: string
    requesterId: string
    status?: $Enums.FriendshipStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type group_membersCreateManyUserInput = {
    id?: string
    groupId: string
    joinedAt?: Date | string
  }

  export type groupsCreateManyCreatorInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type messagesCreateManySenderInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    groupId?: string | null
    receiverId?: string | null
    createdAt?: Date | string
  }

  export type messagesCreateManyReceiverInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    senderId: string
    groupId?: string | null
    createdAt?: Date | string
  }

  export type room_membersCreateManyUserInput = {
    id?: string
    roomId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type locationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    accuracy?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendshipsUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressee?: usersUpdateOneRequiredWithoutReceivedFriendshipsNestedInput
  }

  export type friendshipsUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendshipsUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendshipsUpdateWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: usersUpdateOneRequiredWithoutSentFriendshipsNestedInput
  }

  export type friendshipsUncheckedUpdateWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type friendshipsUncheckedUpdateManyWithoutAddresseeInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumFriendshipStatusFieldUpdateOperationsInput | $Enums.FriendshipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_membersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneRequiredWithoutMembersNestedInput
  }

  export type group_membersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_membersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: group_membersUpdateManyWithoutGroupNestedInput
    messages?: messagesUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: group_membersUncheckedUpdateManyWithoutGroupNestedInput
    messages?: messagesUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: usersUpdateOneWithoutReceivedMessagesNestedInput
    group?: groupsUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usersUpdateOneRequiredWithoutSentMessagesNestedInput
    group?: groupsUpdateOneWithoutMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    senderId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    senderId?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_membersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: roomsUpdateOneRequiredWithoutMembersNestedInput
  }

  export type room_membersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type room_membersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type group_membersCreateManyGroupInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
  }

  export type messagesCreateManyGroupInput = {
    id?: string
    content: string
    type?: $Enums.MessageType
    senderId: string
    receiverId?: string | null
    createdAt?: Date | string
  }

  export type group_membersUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutGroupMembershipsNestedInput
  }

  export type group_membersUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_membersUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: usersUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: usersUpdateOneWithoutReceivedMessagesNestedInput
  }

  export type messagesUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_membersCreateManyRoomInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    leftAt?: Date | string | null
  }

  export type room_messagesCreateManyRoomInput = {
    id?: string
    senderId: string
    content: string
    type?: $Enums.MessageType
    createdAt?: Date | string
  }

  export type room_membersUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutRoomMembershipsNestedInput
  }

  export type room_membersUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type room_membersUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type room_messagesUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_messagesUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type room_messagesUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}