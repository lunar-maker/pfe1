
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model DoctorAvailability
 * 
 */
export type DoctorAvailability = $Result.DefaultSelection<Prisma.$DoctorAvailabilityPayload>
/**
 * Model AppointmentHours
 * 
 */
export type AppointmentHours = $Result.DefaultSelection<Prisma.$AppointmentHoursPayload>
/**
 * Model WeeklyScheduleTemplate
 * 
 */
export type WeeklyScheduleTemplate = $Result.DefaultSelection<Prisma.$WeeklyScheduleTemplatePayload>
/**
 * Model WeeklyTimeSlot
 * 
 */
export type WeeklyTimeSlot = $Result.DefaultSelection<Prisma.$WeeklyTimeSlotPayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model PrescriptionMedication
 * 
 */
export type PrescriptionMedication = $Result.DefaultSelection<Prisma.$PrescriptionMedicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const DayOfWeek: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]


export const MedicalSpecialty: {
  CARDIOLOGY: 'CARDIOLOGY',
  DERMATOLOGY: 'DERMATOLOGY',
  PEDIATRICS: 'PEDIATRICS',
  NEUROLOGY: 'NEUROLOGY',
  GYNECOLOGY: 'GYNECOLOGY',
  OPHTHALMOLOGY: 'OPHTHALMOLOGY',
  GENERAL_MEDICINE: 'GENERAL_MEDICINE',
  PSYCHIATRY: 'PSYCHIATRY',
  ORTHOPEDICS: 'ORTHOPEDICS',
  RADIOLOGY: 'RADIOLOGY'
};

export type MedicalSpecialty = (typeof MedicalSpecialty)[keyof typeof MedicalSpecialty]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

export type MedicalSpecialty = $Enums.MedicalSpecialty

export const MedicalSpecialty: typeof $Enums.MedicalSpecialty

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorAvailability`: Exposes CRUD operations for the **DoctorAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorAvailabilities
    * const doctorAvailabilities = await prisma.doctorAvailability.findMany()
    * ```
    */
  get doctorAvailability(): Prisma.DoctorAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointmentHours`: Exposes CRUD operations for the **AppointmentHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentHours
    * const appointmentHours = await prisma.appointmentHours.findMany()
    * ```
    */
  get appointmentHours(): Prisma.AppointmentHoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyScheduleTemplate`: Exposes CRUD operations for the **WeeklyScheduleTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyScheduleTemplates
    * const weeklyScheduleTemplates = await prisma.weeklyScheduleTemplate.findMany()
    * ```
    */
  get weeklyScheduleTemplate(): Prisma.WeeklyScheduleTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyTimeSlot`: Exposes CRUD operations for the **WeeklyTimeSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyTimeSlots
    * const weeklyTimeSlots = await prisma.weeklyTimeSlot.findMany()
    * ```
    */
  get weeklyTimeSlot(): Prisma.WeeklyTimeSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescriptionMedication`: Exposes CRUD operations for the **PrescriptionMedication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrescriptionMedications
    * const prescriptionMedications = await prisma.prescriptionMedication.findMany()
    * ```
    */
  get prescriptionMedication(): Prisma.PrescriptionMedicationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Appointment: 'Appointment',
    DoctorAvailability: 'DoctorAvailability',
    AppointmentHours: 'AppointmentHours',
    WeeklyScheduleTemplate: 'WeeklyScheduleTemplate',
    WeeklyTimeSlot: 'WeeklyTimeSlot',
    Prescription: 'Prescription',
    PrescriptionMedication: 'PrescriptionMedication'
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
      modelProps: "user" | "appointment" | "doctorAvailability" | "appointmentHours" | "weeklyScheduleTemplate" | "weeklyTimeSlot" | "prescription" | "prescriptionMedication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      DoctorAvailability: {
        payload: Prisma.$DoctorAvailabilityPayload<ExtArgs>
        fields: Prisma.DoctorAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.DoctorAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          findMany: {
            args: Prisma.DoctorAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          create: {
            args: Prisma.DoctorAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          createMany: {
            args: Prisma.DoctorAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.DoctorAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          update: {
            args: Prisma.DoctorAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.DoctorAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.DoctorAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.DoctorAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorAvailability>
          }
          groupBy: {
            args: Prisma.DoctorAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      AppointmentHours: {
        payload: Prisma.$AppointmentHoursPayload<ExtArgs>
        fields: Prisma.AppointmentHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload>
          }
          findFirst: {
            args: Prisma.AppointmentHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload>
          }
          findMany: {
            args: Prisma.AppointmentHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload>[]
          }
          create: {
            args: Prisma.AppointmentHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload>
          }
          createMany: {
            args: Prisma.AppointmentHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload>[]
          }
          delete: {
            args: Prisma.AppointmentHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload>
          }
          update: {
            args: Prisma.AppointmentHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentHoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentHoursPayload>
          }
          aggregate: {
            args: Prisma.AppointmentHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointmentHours>
          }
          groupBy: {
            args: Prisma.AppointmentHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentHoursCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentHoursCountAggregateOutputType> | number
          }
        }
      }
      WeeklyScheduleTemplate: {
        payload: Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>
        fields: Prisma.WeeklyScheduleTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyScheduleTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyScheduleTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload>
          }
          findFirst: {
            args: Prisma.WeeklyScheduleTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyScheduleTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload>
          }
          findMany: {
            args: Prisma.WeeklyScheduleTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload>[]
          }
          create: {
            args: Prisma.WeeklyScheduleTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload>
          }
          createMany: {
            args: Prisma.WeeklyScheduleTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyScheduleTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload>[]
          }
          delete: {
            args: Prisma.WeeklyScheduleTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload>
          }
          update: {
            args: Prisma.WeeklyScheduleTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload>
          }
          deleteMany: {
            args: Prisma.WeeklyScheduleTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyScheduleTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyScheduleTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload>[]
          }
          upsert: {
            args: Prisma.WeeklyScheduleTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScheduleTemplatePayload>
          }
          aggregate: {
            args: Prisma.WeeklyScheduleTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyScheduleTemplate>
          }
          groupBy: {
            args: Prisma.WeeklyScheduleTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyScheduleTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyScheduleTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyScheduleTemplateCountAggregateOutputType> | number
          }
        }
      }
      WeeklyTimeSlot: {
        payload: Prisma.$WeeklyTimeSlotPayload<ExtArgs>
        fields: Prisma.WeeklyTimeSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyTimeSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyTimeSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload>
          }
          findFirst: {
            args: Prisma.WeeklyTimeSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyTimeSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload>
          }
          findMany: {
            args: Prisma.WeeklyTimeSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload>[]
          }
          create: {
            args: Prisma.WeeklyTimeSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload>
          }
          createMany: {
            args: Prisma.WeeklyTimeSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyTimeSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload>[]
          }
          delete: {
            args: Prisma.WeeklyTimeSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload>
          }
          update: {
            args: Prisma.WeeklyTimeSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyTimeSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyTimeSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyTimeSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload>[]
          }
          upsert: {
            args: Prisma.WeeklyTimeSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyTimeSlotPayload>
          }
          aggregate: {
            args: Prisma.WeeklyTimeSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyTimeSlot>
          }
          groupBy: {
            args: Prisma.WeeklyTimeSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyTimeSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyTimeSlotCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyTimeSlotCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      PrescriptionMedication: {
        payload: Prisma.$PrescriptionMedicationPayload<ExtArgs>
        fields: Prisma.PrescriptionMedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionMedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionMedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionMedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionMedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload>
          }
          findMany: {
            args: Prisma.PrescriptionMedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload>[]
          }
          create: {
            args: Prisma.PrescriptionMedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload>
          }
          createMany: {
            args: Prisma.PrescriptionMedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionMedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionMedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload>
          }
          update: {
            args: Prisma.PrescriptionMedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionMedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionMedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionMedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionMedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionMedicationPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionMedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescriptionMedication>
          }
          groupBy: {
            args: Prisma.PrescriptionMedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionMedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionMedicationCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionMedicationCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    appointment?: AppointmentOmit
    doctorAvailability?: DoctorAvailabilityOmit
    appointmentHours?: AppointmentHoursOmit
    weeklyScheduleTemplate?: WeeklyScheduleTemplateOmit
    weeklyTimeSlot?: WeeklyTimeSlotOmit
    prescription?: PrescriptionOmit
    prescriptionMedication?: PrescriptionMedicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    weeklySchedules: number
    patientAppointments: number
    doctorAppointments: number
    doctorAvailabilities: number
    prescriptionsAsDoctor: number
    prescriptionsAsPatient: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklySchedules?: boolean | UserCountOutputTypeCountWeeklySchedulesArgs
    patientAppointments?: boolean | UserCountOutputTypeCountPatientAppointmentsArgs
    doctorAppointments?: boolean | UserCountOutputTypeCountDoctorAppointmentsArgs
    doctorAvailabilities?: boolean | UserCountOutputTypeCountDoctorAvailabilitiesArgs
    prescriptionsAsDoctor?: boolean | UserCountOutputTypeCountPrescriptionsAsDoctorArgs
    prescriptionsAsPatient?: boolean | UserCountOutputTypeCountPrescriptionsAsPatientArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeeklySchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyScheduleTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoctorAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDoctorAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorAvailabilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrescriptionsAsDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrescriptionsAsPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type DoctorAvailabilityCountOutputType
   */

  export type DoctorAvailabilityCountOutputType = {
    appointmentHours: number
  }

  export type DoctorAvailabilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointmentHours?: boolean | DoctorAvailabilityCountOutputTypeCountAppointmentHoursArgs
  }

  // Custom InputTypes
  /**
   * DoctorAvailabilityCountOutputType without action
   */
  export type DoctorAvailabilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailabilityCountOutputType
     */
    select?: DoctorAvailabilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorAvailabilityCountOutputType without action
   */
  export type DoctorAvailabilityCountOutputTypeCountAppointmentHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentHoursWhereInput
  }


  /**
   * Count Type WeeklyScheduleTemplateCountOutputType
   */

  export type WeeklyScheduleTemplateCountOutputType = {
    timeSlots: number
  }

  export type WeeklyScheduleTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeSlots?: boolean | WeeklyScheduleTemplateCountOutputTypeCountTimeSlotsArgs
  }

  // Custom InputTypes
  /**
   * WeeklyScheduleTemplateCountOutputType without action
   */
  export type WeeklyScheduleTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplateCountOutputType
     */
    select?: WeeklyScheduleTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeeklyScheduleTemplateCountOutputType without action
   */
  export type WeeklyScheduleTemplateCountOutputTypeCountTimeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyTimeSlotWhereInput
  }


  /**
   * Count Type WeeklyTimeSlotCountOutputType
   */

  export type WeeklyTimeSlotCountOutputType = {
    appointments: number
  }

  export type WeeklyTimeSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | WeeklyTimeSlotCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * WeeklyTimeSlotCountOutputType without action
   */
  export type WeeklyTimeSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlotCountOutputType
     */
    select?: WeeklyTimeSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeeklyTimeSlotCountOutputType without action
   */
  export type WeeklyTimeSlotCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type PrescriptionCountOutputType
   */

  export type PrescriptionCountOutputType = {
    medications: number
  }

  export type PrescriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | PrescriptionCountOutputTypeCountMedicationsArgs
  }

  // Custom InputTypes
  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionCountOutputType
     */
    select?: PrescriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionMedicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    role: $Enums.Role | null
    first_name: string | null
    last_name: string | null
    phone_number: string | null
    birth_date: Date | null
    gender: $Enums.Gender | null
    specialty: $Enums.MedicalSpecialty | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    role: $Enums.Role | null
    first_name: string | null
    last_name: string | null
    phone_number: string | null
    birth_date: Date | null
    gender: $Enums.Gender | null
    specialty: $Enums.MedicalSpecialty | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    role: number
    first_name: number
    last_name: number
    phone_number: number
    birth_date: number
    gender: number
    specialty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    birth_date?: true
    gender?: true
    specialty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    birth_date?: true
    gender?: true
    specialty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    first_name?: true
    last_name?: true
    phone_number?: true
    birth_date?: true
    gender?: true
    specialty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    clerkId: string
    role: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date
    gender: $Enums.Gender
    specialty: $Enums.MedicalSpecialty | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    birth_date?: boolean
    gender?: boolean
    specialty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weeklySchedules?: boolean | User$weeklySchedulesArgs<ExtArgs>
    patientAppointments?: boolean | User$patientAppointmentsArgs<ExtArgs>
    doctorAppointments?: boolean | User$doctorAppointmentsArgs<ExtArgs>
    doctorAvailabilities?: boolean | User$doctorAvailabilitiesArgs<ExtArgs>
    prescriptionsAsDoctor?: boolean | User$prescriptionsAsDoctorArgs<ExtArgs>
    prescriptionsAsPatient?: boolean | User$prescriptionsAsPatientArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    birth_date?: boolean
    gender?: boolean
    specialty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    birth_date?: boolean
    gender?: boolean
    specialty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    role?: boolean
    first_name?: boolean
    last_name?: boolean
    phone_number?: boolean
    birth_date?: boolean
    gender?: boolean
    specialty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "role" | "first_name" | "last_name" | "phone_number" | "birth_date" | "gender" | "specialty" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklySchedules?: boolean | User$weeklySchedulesArgs<ExtArgs>
    patientAppointments?: boolean | User$patientAppointmentsArgs<ExtArgs>
    doctorAppointments?: boolean | User$doctorAppointmentsArgs<ExtArgs>
    doctorAvailabilities?: boolean | User$doctorAvailabilitiesArgs<ExtArgs>
    prescriptionsAsDoctor?: boolean | User$prescriptionsAsDoctorArgs<ExtArgs>
    prescriptionsAsPatient?: boolean | User$prescriptionsAsPatientArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      weeklySchedules: Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>[]
      patientAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
      doctorAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
      doctorAvailabilities: Prisma.$DoctorAvailabilityPayload<ExtArgs>[]
      prescriptionsAsDoctor: Prisma.$PrescriptionPayload<ExtArgs>[]
      prescriptionsAsPatient: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      role: $Enums.Role
      first_name: string
      last_name: string
      phone_number: string
      birth_date: Date
      gender: $Enums.Gender
      specialty: $Enums.MedicalSpecialty | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weeklySchedules<T extends User$weeklySchedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$weeklySchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientAppointments<T extends User$patientAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctorAppointments<T extends User$doctorAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctorAvailabilities<T extends User$doctorAvailabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorAvailabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptionsAsDoctor<T extends User$prescriptionsAsDoctorArgs<ExtArgs> = {}>(args?: Subset<T, User$prescriptionsAsDoctorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptionsAsPatient<T extends User$prescriptionsAsPatientArgs<ExtArgs> = {}>(args?: Subset<T, User$prescriptionsAsPatientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly birth_date: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly specialty: FieldRef<"User", 'MedicalSpecialty'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.weeklySchedules
   */
  export type User$weeklySchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
    where?: WeeklyScheduleTemplateWhereInput
    orderBy?: WeeklyScheduleTemplateOrderByWithRelationInput | WeeklyScheduleTemplateOrderByWithRelationInput[]
    cursor?: WeeklyScheduleTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyScheduleTemplateScalarFieldEnum | WeeklyScheduleTemplateScalarFieldEnum[]
  }

  /**
   * User.patientAppointments
   */
  export type User$patientAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.doctorAppointments
   */
  export type User$doctorAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.doctorAvailabilities
   */
  export type User$doctorAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    where?: DoctorAvailabilityWhereInput
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    cursor?: DoctorAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * User.prescriptionsAsDoctor
   */
  export type User$prescriptionsAsDoctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * User.prescriptionsAsPatient
   */
  export type User$prescriptionsAsPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
    timeSlotId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
    timeSlotId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    typemaladie: string | null
    status: $Enums.AppointmentStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    doctorId: number | null
    patientId: number | null
    timeSlotId: number | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    typemaladie: string | null
    status: $Enums.AppointmentStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    doctorId: number | null
    patientId: number | null
    timeSlotId: number | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    date: number
    startTime: number
    endTime: number
    typemaladie: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    doctorId: number
    patientId: number
    timeSlotId: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    timeSlotId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    timeSlotId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    typemaladie?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    doctorId?: true
    patientId?: true
    timeSlotId?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    typemaladie?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    doctorId?: true
    patientId?: true
    timeSlotId?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    typemaladie?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    doctorId?: true
    patientId?: true
    timeSlotId?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    date: Date
    startTime: string
    endTime: string
    typemaladie: string
    status: $Enums.AppointmentStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    doctorId: number
    patientId: number
    timeSlotId: number | null
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    typemaladie?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
    patientId?: boolean
    timeSlotId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | Appointment$timeSlotArgs<ExtArgs>
    prescription?: boolean | Appointment$prescriptionArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    typemaladie?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
    patientId?: boolean
    timeSlotId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | Appointment$timeSlotArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    typemaladie?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
    patientId?: boolean
    timeSlotId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | Appointment$timeSlotArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    typemaladie?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
    patientId?: boolean
    timeSlotId?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "startTime" | "endTime" | "typemaladie" | "status" | "notes" | "createdAt" | "updatedAt" | "doctorId" | "patientId" | "timeSlotId", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | Appointment$timeSlotArgs<ExtArgs>
    prescription?: boolean | Appointment$prescriptionArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | Appointment$timeSlotArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | Appointment$timeSlotArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      patient: Prisma.$UserPayload<ExtArgs>
      timeSlot: Prisma.$WeeklyTimeSlotPayload<ExtArgs> | null
      prescription: Prisma.$PrescriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      startTime: string
      endTime: string
      typemaladie: string
      status: $Enums.AppointmentStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
      doctorId: number
      patientId: number
      timeSlotId: number | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timeSlot<T extends Appointment$timeSlotArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$timeSlotArgs<ExtArgs>>): Prisma__WeeklyTimeSlotClient<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prescription<T extends Appointment$prescriptionArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$prescriptionArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly startTime: FieldRef<"Appointment", 'String'>
    readonly endTime: FieldRef<"Appointment", 'String'>
    readonly typemaladie: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
    readonly doctorId: FieldRef<"Appointment", 'Int'>
    readonly patientId: FieldRef<"Appointment", 'Int'>
    readonly timeSlotId: FieldRef<"Appointment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.timeSlot
   */
  export type Appointment$timeSlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    where?: WeeklyTimeSlotWhereInput
  }

  /**
   * Appointment.prescription
   */
  export type Appointment$prescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model DoctorAvailability
   */

  export type AggregateDoctorAvailability = {
    _count: DoctorAvailabilityCountAggregateOutputType | null
    _avg: DoctorAvailabilityAvgAggregateOutputType | null
    _sum: DoctorAvailabilitySumAggregateOutputType | null
    _min: DoctorAvailabilityMinAggregateOutputType | null
    _max: DoctorAvailabilityMaxAggregateOutputType | null
  }

  export type DoctorAvailabilityAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
  }

  export type DoctorAvailabilitySumAggregateOutputType = {
    id: number | null
    doctorId: number | null
  }

  export type DoctorAvailabilityMinAggregateOutputType = {
    id: number | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    doctorId: number | null
  }

  export type DoctorAvailabilityMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    doctorId: number | null
  }

  export type DoctorAvailabilityCountAggregateOutputType = {
    id: number
    date: number
    startTime: number
    endTime: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    doctorId: number
    _all: number
  }


  export type DoctorAvailabilityAvgAggregateInputType = {
    id?: true
    doctorId?: true
  }

  export type DoctorAvailabilitySumAggregateInputType = {
    id?: true
    doctorId?: true
  }

  export type DoctorAvailabilityMinAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    doctorId?: true
  }

  export type DoctorAvailabilityMaxAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    doctorId?: true
  }

  export type DoctorAvailabilityCountAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    doctorId?: true
    _all?: true
  }

  export type DoctorAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorAvailability to aggregate.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorAvailabilities
    **/
    _count?: true | DoctorAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorAvailabilityMaxAggregateInputType
  }

  export type GetDoctorAvailabilityAggregateType<T extends DoctorAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorAvailability[P]>
      : GetScalarType<T[P], AggregateDoctorAvailability[P]>
  }




  export type DoctorAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorAvailabilityWhereInput
    orderBy?: DoctorAvailabilityOrderByWithAggregationInput | DoctorAvailabilityOrderByWithAggregationInput[]
    by: DoctorAvailabilityScalarFieldEnum[] | DoctorAvailabilityScalarFieldEnum
    having?: DoctorAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorAvailabilityCountAggregateInputType | true
    _avg?: DoctorAvailabilityAvgAggregateInputType
    _sum?: DoctorAvailabilitySumAggregateInputType
    _min?: DoctorAvailabilityMinAggregateInputType
    _max?: DoctorAvailabilityMaxAggregateInputType
  }

  export type DoctorAvailabilityGroupByOutputType = {
    id: number
    date: Date
    startTime: string
    endTime: string
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    doctorId: number
    _count: DoctorAvailabilityCountAggregateOutputType | null
    _avg: DoctorAvailabilityAvgAggregateOutputType | null
    _sum: DoctorAvailabilitySumAggregateOutputType | null
    _min: DoctorAvailabilityMinAggregateOutputType | null
    _max: DoctorAvailabilityMaxAggregateOutputType | null
  }

  type GetDoctorAvailabilityGroupByPayload<T extends DoctorAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type DoctorAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    appointmentHours?: boolean | DoctorAvailability$appointmentHoursArgs<ExtArgs>
    _count?: boolean | DoctorAvailabilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorAvailability"]>

  export type DoctorAvailabilitySelectScalar = {
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
  }

  export type DoctorAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "startTime" | "endTime" | "isAvailable" | "createdAt" | "updatedAt" | "doctorId", ExtArgs["result"]["doctorAvailability"]>
  export type DoctorAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    appointmentHours?: boolean | DoctorAvailability$appointmentHoursArgs<ExtArgs>
    _count?: boolean | DoctorAvailabilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorAvailability"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      appointmentHours: Prisma.$AppointmentHoursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      startTime: string
      endTime: string
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
      doctorId: number
    }, ExtArgs["result"]["doctorAvailability"]>
    composites: {}
  }

  type DoctorAvailabilityGetPayload<S extends boolean | null | undefined | DoctorAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$DoctorAvailabilityPayload, S>

  type DoctorAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorAvailabilityCountAggregateInputType | true
    }

  export interface DoctorAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorAvailability'], meta: { name: 'DoctorAvailability' } }
    /**
     * Find zero or one DoctorAvailability that matches the filter.
     * @param {DoctorAvailabilityFindUniqueArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorAvailabilityFindUniqueArgs>(args: SelectSubset<T, DoctorAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindFirstArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorAvailabilityFindFirstArgs>(args?: SelectSubset<T, DoctorAvailabilityFindFirstArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindFirstOrThrowArgs} args - Arguments to find a DoctorAvailability
     * @example
     * // Get one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorAvailabilities
     * const doctorAvailabilities = await prisma.doctorAvailability.findMany()
     * 
     * // Get first 10 DoctorAvailabilities
     * const doctorAvailabilities = await prisma.doctorAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorAvailabilityFindManyArgs>(args?: SelectSubset<T, DoctorAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorAvailability.
     * @param {DoctorAvailabilityCreateArgs} args - Arguments to create a DoctorAvailability.
     * @example
     * // Create one DoctorAvailability
     * const DoctorAvailability = await prisma.doctorAvailability.create({
     *   data: {
     *     // ... data to create a DoctorAvailability
     *   }
     * })
     * 
     */
    create<T extends DoctorAvailabilityCreateArgs>(args: SelectSubset<T, DoctorAvailabilityCreateArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorAvailabilities.
     * @param {DoctorAvailabilityCreateManyArgs} args - Arguments to create many DoctorAvailabilities.
     * @example
     * // Create many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorAvailabilityCreateManyArgs>(args?: SelectSubset<T, DoctorAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorAvailabilities and returns the data saved in the database.
     * @param {DoctorAvailabilityCreateManyAndReturnArgs} args - Arguments to create many DoctorAvailabilities.
     * @example
     * // Create many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorAvailabilities and only return the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorAvailability.
     * @param {DoctorAvailabilityDeleteArgs} args - Arguments to delete one DoctorAvailability.
     * @example
     * // Delete one DoctorAvailability
     * const DoctorAvailability = await prisma.doctorAvailability.delete({
     *   where: {
     *     // ... filter to delete one DoctorAvailability
     *   }
     * })
     * 
     */
    delete<T extends DoctorAvailabilityDeleteArgs>(args: SelectSubset<T, DoctorAvailabilityDeleteArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorAvailability.
     * @param {DoctorAvailabilityUpdateArgs} args - Arguments to update one DoctorAvailability.
     * @example
     * // Update one DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorAvailabilityUpdateArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorAvailabilities.
     * @param {DoctorAvailabilityDeleteManyArgs} args - Arguments to filter DoctorAvailabilities to delete.
     * @example
     * // Delete a few DoctorAvailabilities
     * const { count } = await prisma.doctorAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorAvailabilityDeleteManyArgs>(args?: SelectSubset<T, DoctorAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorAvailabilityUpdateManyArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorAvailabilities and returns the data updated in the database.
     * @param {DoctorAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many DoctorAvailabilities.
     * @example
     * // Update many DoctorAvailabilities
     * const doctorAvailability = await prisma.doctorAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorAvailabilities and only return the `id`
     * const doctorAvailabilityWithIdOnly = await prisma.doctorAvailability.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorAvailability.
     * @param {DoctorAvailabilityUpsertArgs} args - Arguments to update or create a DoctorAvailability.
     * @example
     * // Update or create a DoctorAvailability
     * const doctorAvailability = await prisma.doctorAvailability.upsert({
     *   create: {
     *     // ... data to create a DoctorAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorAvailability we want to update
     *   }
     * })
     */
    upsert<T extends DoctorAvailabilityUpsertArgs>(args: SelectSubset<T, DoctorAvailabilityUpsertArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityCountArgs} args - Arguments to filter DoctorAvailabilities to count.
     * @example
     * // Count the number of DoctorAvailabilities
     * const count = await prisma.doctorAvailability.count({
     *   where: {
     *     // ... the filter for the DoctorAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends DoctorAvailabilityCountArgs>(
      args?: Subset<T, DoctorAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAvailabilityAggregateArgs>(args: Subset<T, DoctorAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetDoctorAvailabilityAggregateType<T>>

    /**
     * Group by DoctorAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAvailabilityGroupByArgs} args - Group by arguments.
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
      T extends DoctorAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: DoctorAvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorAvailability model
   */
  readonly fields: DoctorAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointmentHours<T extends DoctorAvailability$appointmentHoursArgs<ExtArgs> = {}>(args?: Subset<T, DoctorAvailability$appointmentHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DoctorAvailability model
   */
  interface DoctorAvailabilityFieldRefs {
    readonly id: FieldRef<"DoctorAvailability", 'Int'>
    readonly date: FieldRef<"DoctorAvailability", 'DateTime'>
    readonly startTime: FieldRef<"DoctorAvailability", 'String'>
    readonly endTime: FieldRef<"DoctorAvailability", 'String'>
    readonly isAvailable: FieldRef<"DoctorAvailability", 'Boolean'>
    readonly createdAt: FieldRef<"DoctorAvailability", 'DateTime'>
    readonly updatedAt: FieldRef<"DoctorAvailability", 'DateTime'>
    readonly doctorId: FieldRef<"DoctorAvailability", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DoctorAvailability findUnique
   */
  export type DoctorAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability findUniqueOrThrow
   */
  export type DoctorAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability findFirst
   */
  export type DoctorAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorAvailabilities.
     */
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability findFirstOrThrow
   */
  export type DoctorAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailability to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorAvailabilities.
     */
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability findMany
   */
  export type DoctorAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorAvailabilities to fetch.
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorAvailabilities to fetch.
     */
    orderBy?: DoctorAvailabilityOrderByWithRelationInput | DoctorAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorAvailabilities.
     */
    cursor?: DoctorAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorAvailabilities.
     */
    skip?: number
    distinct?: DoctorAvailabilityScalarFieldEnum | DoctorAvailabilityScalarFieldEnum[]
  }

  /**
   * DoctorAvailability create
   */
  export type DoctorAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorAvailability.
     */
    data: XOR<DoctorAvailabilityCreateInput, DoctorAvailabilityUncheckedCreateInput>
  }

  /**
   * DoctorAvailability createMany
   */
  export type DoctorAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorAvailabilities.
     */
    data: DoctorAvailabilityCreateManyInput | DoctorAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorAvailability createManyAndReturn
   */
  export type DoctorAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorAvailabilities.
     */
    data: DoctorAvailabilityCreateManyInput | DoctorAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorAvailability update
   */
  export type DoctorAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorAvailability.
     */
    data: XOR<DoctorAvailabilityUpdateInput, DoctorAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which DoctorAvailability to update.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability updateMany
   */
  export type DoctorAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorAvailabilities.
     */
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorAvailabilities to update
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to update.
     */
    limit?: number
  }

  /**
   * DoctorAvailability updateManyAndReturn
   */
  export type DoctorAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update DoctorAvailabilities.
     */
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorAvailabilities to update
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorAvailability upsert
   */
  export type DoctorAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorAvailability to update in case it exists.
     */
    where: DoctorAvailabilityWhereUniqueInput
    /**
     * In case the DoctorAvailability found by the `where` argument doesn't exist, create a new DoctorAvailability with this data.
     */
    create: XOR<DoctorAvailabilityCreateInput, DoctorAvailabilityUncheckedCreateInput>
    /**
     * In case the DoctorAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorAvailabilityUpdateInput, DoctorAvailabilityUncheckedUpdateInput>
  }

  /**
   * DoctorAvailability delete
   */
  export type DoctorAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which DoctorAvailability to delete.
     */
    where: DoctorAvailabilityWhereUniqueInput
  }

  /**
   * DoctorAvailability deleteMany
   */
  export type DoctorAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorAvailabilities to delete
     */
    where?: DoctorAvailabilityWhereInput
    /**
     * Limit how many DoctorAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * DoctorAvailability.appointmentHours
   */
  export type DoctorAvailability$appointmentHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
    where?: AppointmentHoursWhereInput
    orderBy?: AppointmentHoursOrderByWithRelationInput | AppointmentHoursOrderByWithRelationInput[]
    cursor?: AppointmentHoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentHoursScalarFieldEnum | AppointmentHoursScalarFieldEnum[]
  }

  /**
   * DoctorAvailability without action
   */
  export type DoctorAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorAvailability
     */
    select?: DoctorAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorAvailability
     */
    omit?: DoctorAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model AppointmentHours
   */

  export type AggregateAppointmentHours = {
    _count: AppointmentHoursCountAggregateOutputType | null
    _avg: AppointmentHoursAvgAggregateOutputType | null
    _sum: AppointmentHoursSumAggregateOutputType | null
    _min: AppointmentHoursMinAggregateOutputType | null
    _max: AppointmentHoursMaxAggregateOutputType | null
  }

  export type AppointmentHoursAvgAggregateOutputType = {
    id: number | null
    doctorAvailabilityId: number | null
  }

  export type AppointmentHoursSumAggregateOutputType = {
    id: number | null
    doctorAvailabilityId: number | null
  }

  export type AppointmentHoursMinAggregateOutputType = {
    id: number | null
    date: string | null
    hour: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    doctorAvailabilityId: number | null
  }

  export type AppointmentHoursMaxAggregateOutputType = {
    id: number | null
    date: string | null
    hour: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    doctorAvailabilityId: number | null
  }

  export type AppointmentHoursCountAggregateOutputType = {
    id: number
    date: number
    hour: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    doctorAvailabilityId: number
    _all: number
  }


  export type AppointmentHoursAvgAggregateInputType = {
    id?: true
    doctorAvailabilityId?: true
  }

  export type AppointmentHoursSumAggregateInputType = {
    id?: true
    doctorAvailabilityId?: true
  }

  export type AppointmentHoursMinAggregateInputType = {
    id?: true
    date?: true
    hour?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    doctorAvailabilityId?: true
  }

  export type AppointmentHoursMaxAggregateInputType = {
    id?: true
    date?: true
    hour?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    doctorAvailabilityId?: true
  }

  export type AppointmentHoursCountAggregateInputType = {
    id?: true
    date?: true
    hour?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    doctorAvailabilityId?: true
    _all?: true
  }

  export type AppointmentHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentHours to aggregate.
     */
    where?: AppointmentHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentHours to fetch.
     */
    orderBy?: AppointmentHoursOrderByWithRelationInput | AppointmentHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentHours
    **/
    _count?: true | AppointmentHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentHoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentHoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentHoursMaxAggregateInputType
  }

  export type GetAppointmentHoursAggregateType<T extends AppointmentHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentHours[P]>
      : GetScalarType<T[P], AggregateAppointmentHours[P]>
  }




  export type AppointmentHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentHoursWhereInput
    orderBy?: AppointmentHoursOrderByWithAggregationInput | AppointmentHoursOrderByWithAggregationInput[]
    by: AppointmentHoursScalarFieldEnum[] | AppointmentHoursScalarFieldEnum
    having?: AppointmentHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentHoursCountAggregateInputType | true
    _avg?: AppointmentHoursAvgAggregateInputType
    _sum?: AppointmentHoursSumAggregateInputType
    _min?: AppointmentHoursMinAggregateInputType
    _max?: AppointmentHoursMaxAggregateInputType
  }

  export type AppointmentHoursGroupByOutputType = {
    id: number
    date: string
    hour: string
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    doctorAvailabilityId: number
    _count: AppointmentHoursCountAggregateOutputType | null
    _avg: AppointmentHoursAvgAggregateOutputType | null
    _sum: AppointmentHoursSumAggregateOutputType | null
    _min: AppointmentHoursMinAggregateOutputType | null
    _max: AppointmentHoursMaxAggregateOutputType | null
  }

  type GetAppointmentHoursGroupByPayload<T extends AppointmentHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentHoursGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentHoursGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    hour?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorAvailabilityId?: boolean
    doctorAvailability?: boolean | DoctorAvailabilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentHours"]>

  export type AppointmentHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    hour?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorAvailabilityId?: boolean
    doctorAvailability?: boolean | DoctorAvailabilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentHours"]>

  export type AppointmentHoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    hour?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorAvailabilityId?: boolean
    doctorAvailability?: boolean | DoctorAvailabilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentHours"]>

  export type AppointmentHoursSelectScalar = {
    id?: boolean
    date?: boolean
    hour?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorAvailabilityId?: boolean
  }

  export type AppointmentHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "hour" | "isAvailable" | "createdAt" | "updatedAt" | "doctorAvailabilityId", ExtArgs["result"]["appointmentHours"]>
  export type AppointmentHoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorAvailability?: boolean | DoctorAvailabilityDefaultArgs<ExtArgs>
  }
  export type AppointmentHoursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorAvailability?: boolean | DoctorAvailabilityDefaultArgs<ExtArgs>
  }
  export type AppointmentHoursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorAvailability?: boolean | DoctorAvailabilityDefaultArgs<ExtArgs>
  }

  export type $AppointmentHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointmentHours"
    objects: {
      doctorAvailability: Prisma.$DoctorAvailabilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      hour: string
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
      doctorAvailabilityId: number
    }, ExtArgs["result"]["appointmentHours"]>
    composites: {}
  }

  type AppointmentHoursGetPayload<S extends boolean | null | undefined | AppointmentHoursDefaultArgs> = $Result.GetResult<Prisma.$AppointmentHoursPayload, S>

  type AppointmentHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentHoursCountAggregateInputType | true
    }

  export interface AppointmentHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointmentHours'], meta: { name: 'AppointmentHours' } }
    /**
     * Find zero or one AppointmentHours that matches the filter.
     * @param {AppointmentHoursFindUniqueArgs} args - Arguments to find a AppointmentHours
     * @example
     * // Get one AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentHoursFindUniqueArgs>(args: SelectSubset<T, AppointmentHoursFindUniqueArgs<ExtArgs>>): Prisma__AppointmentHoursClient<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointmentHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentHoursFindUniqueOrThrowArgs} args - Arguments to find a AppointmentHours
     * @example
     * // Get one AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentHoursClient<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentHoursFindFirstArgs} args - Arguments to find a AppointmentHours
     * @example
     * // Get one AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentHoursFindFirstArgs>(args?: SelectSubset<T, AppointmentHoursFindFirstArgs<ExtArgs>>): Prisma__AppointmentHoursClient<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentHoursFindFirstOrThrowArgs} args - Arguments to find a AppointmentHours
     * @example
     * // Get one AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentHoursClient<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointmentHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.findMany()
     * 
     * // Get first 10 AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentHoursWithIdOnly = await prisma.appointmentHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentHoursFindManyArgs>(args?: SelectSubset<T, AppointmentHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointmentHours.
     * @param {AppointmentHoursCreateArgs} args - Arguments to create a AppointmentHours.
     * @example
     * // Create one AppointmentHours
     * const AppointmentHours = await prisma.appointmentHours.create({
     *   data: {
     *     // ... data to create a AppointmentHours
     *   }
     * })
     * 
     */
    create<T extends AppointmentHoursCreateArgs>(args: SelectSubset<T, AppointmentHoursCreateArgs<ExtArgs>>): Prisma__AppointmentHoursClient<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointmentHours.
     * @param {AppointmentHoursCreateManyArgs} args - Arguments to create many AppointmentHours.
     * @example
     * // Create many AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentHoursCreateManyArgs>(args?: SelectSubset<T, AppointmentHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppointmentHours and returns the data saved in the database.
     * @param {AppointmentHoursCreateManyAndReturnArgs} args - Arguments to create many AppointmentHours.
     * @example
     * // Create many AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppointmentHours and only return the `id`
     * const appointmentHoursWithIdOnly = await prisma.appointmentHours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppointmentHours.
     * @param {AppointmentHoursDeleteArgs} args - Arguments to delete one AppointmentHours.
     * @example
     * // Delete one AppointmentHours
     * const AppointmentHours = await prisma.appointmentHours.delete({
     *   where: {
     *     // ... filter to delete one AppointmentHours
     *   }
     * })
     * 
     */
    delete<T extends AppointmentHoursDeleteArgs>(args: SelectSubset<T, AppointmentHoursDeleteArgs<ExtArgs>>): Prisma__AppointmentHoursClient<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointmentHours.
     * @param {AppointmentHoursUpdateArgs} args - Arguments to update one AppointmentHours.
     * @example
     * // Update one AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentHoursUpdateArgs>(args: SelectSubset<T, AppointmentHoursUpdateArgs<ExtArgs>>): Prisma__AppointmentHoursClient<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointmentHours.
     * @param {AppointmentHoursDeleteManyArgs} args - Arguments to filter AppointmentHours to delete.
     * @example
     * // Delete a few AppointmentHours
     * const { count } = await prisma.appointmentHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentHoursDeleteManyArgs>(args?: SelectSubset<T, AppointmentHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentHoursUpdateManyArgs>(args: SelectSubset<T, AppointmentHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentHours and returns the data updated in the database.
     * @param {AppointmentHoursUpdateManyAndReturnArgs} args - Arguments to update many AppointmentHours.
     * @example
     * // Update many AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppointmentHours and only return the `id`
     * const appointmentHoursWithIdOnly = await prisma.appointmentHours.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentHoursUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentHoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppointmentHours.
     * @param {AppointmentHoursUpsertArgs} args - Arguments to update or create a AppointmentHours.
     * @example
     * // Update or create a AppointmentHours
     * const appointmentHours = await prisma.appointmentHours.upsert({
     *   create: {
     *     // ... data to create a AppointmentHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentHours we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentHoursUpsertArgs>(args: SelectSubset<T, AppointmentHoursUpsertArgs<ExtArgs>>): Prisma__AppointmentHoursClient<$Result.GetResult<Prisma.$AppointmentHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointmentHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentHoursCountArgs} args - Arguments to filter AppointmentHours to count.
     * @example
     * // Count the number of AppointmentHours
     * const count = await prisma.appointmentHours.count({
     *   where: {
     *     // ... the filter for the AppointmentHours we want to count
     *   }
     * })
    **/
    count<T extends AppointmentHoursCountArgs>(
      args?: Subset<T, AppointmentHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentHoursAggregateArgs>(args: Subset<T, AppointmentHoursAggregateArgs>): Prisma.PrismaPromise<GetAppointmentHoursAggregateType<T>>

    /**
     * Group by AppointmentHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentHoursGroupByArgs} args - Group by arguments.
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
      T extends AppointmentHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentHoursGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentHoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointmentHours model
   */
  readonly fields: AppointmentHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorAvailability<T extends DoctorAvailabilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorAvailabilityDefaultArgs<ExtArgs>>): Prisma__DoctorAvailabilityClient<$Result.GetResult<Prisma.$DoctorAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AppointmentHours model
   */
  interface AppointmentHoursFieldRefs {
    readonly id: FieldRef<"AppointmentHours", 'Int'>
    readonly date: FieldRef<"AppointmentHours", 'String'>
    readonly hour: FieldRef<"AppointmentHours", 'String'>
    readonly isAvailable: FieldRef<"AppointmentHours", 'Boolean'>
    readonly createdAt: FieldRef<"AppointmentHours", 'DateTime'>
    readonly updatedAt: FieldRef<"AppointmentHours", 'DateTime'>
    readonly doctorAvailabilityId: FieldRef<"AppointmentHours", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AppointmentHours findUnique
   */
  export type AppointmentHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentHours to fetch.
     */
    where: AppointmentHoursWhereUniqueInput
  }

  /**
   * AppointmentHours findUniqueOrThrow
   */
  export type AppointmentHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentHours to fetch.
     */
    where: AppointmentHoursWhereUniqueInput
  }

  /**
   * AppointmentHours findFirst
   */
  export type AppointmentHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentHours to fetch.
     */
    where?: AppointmentHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentHours to fetch.
     */
    orderBy?: AppointmentHoursOrderByWithRelationInput | AppointmentHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentHours.
     */
    cursor?: AppointmentHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentHours.
     */
    distinct?: AppointmentHoursScalarFieldEnum | AppointmentHoursScalarFieldEnum[]
  }

  /**
   * AppointmentHours findFirstOrThrow
   */
  export type AppointmentHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentHours to fetch.
     */
    where?: AppointmentHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentHours to fetch.
     */
    orderBy?: AppointmentHoursOrderByWithRelationInput | AppointmentHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentHours.
     */
    cursor?: AppointmentHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentHours.
     */
    distinct?: AppointmentHoursScalarFieldEnum | AppointmentHoursScalarFieldEnum[]
  }

  /**
   * AppointmentHours findMany
   */
  export type AppointmentHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentHours to fetch.
     */
    where?: AppointmentHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentHours to fetch.
     */
    orderBy?: AppointmentHoursOrderByWithRelationInput | AppointmentHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentHours.
     */
    cursor?: AppointmentHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentHours.
     */
    skip?: number
    distinct?: AppointmentHoursScalarFieldEnum | AppointmentHoursScalarFieldEnum[]
  }

  /**
   * AppointmentHours create
   */
  export type AppointmentHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointmentHours.
     */
    data: XOR<AppointmentHoursCreateInput, AppointmentHoursUncheckedCreateInput>
  }

  /**
   * AppointmentHours createMany
   */
  export type AppointmentHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointmentHours.
     */
    data: AppointmentHoursCreateManyInput | AppointmentHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentHours createManyAndReturn
   */
  export type AppointmentHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * The data used to create many AppointmentHours.
     */
    data: AppointmentHoursCreateManyInput | AppointmentHoursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppointmentHours update
   */
  export type AppointmentHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointmentHours.
     */
    data: XOR<AppointmentHoursUpdateInput, AppointmentHoursUncheckedUpdateInput>
    /**
     * Choose, which AppointmentHours to update.
     */
    where: AppointmentHoursWhereUniqueInput
  }

  /**
   * AppointmentHours updateMany
   */
  export type AppointmentHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointmentHours.
     */
    data: XOR<AppointmentHoursUpdateManyMutationInput, AppointmentHoursUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentHours to update
     */
    where?: AppointmentHoursWhereInput
    /**
     * Limit how many AppointmentHours to update.
     */
    limit?: number
  }

  /**
   * AppointmentHours updateManyAndReturn
   */
  export type AppointmentHoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * The data used to update AppointmentHours.
     */
    data: XOR<AppointmentHoursUpdateManyMutationInput, AppointmentHoursUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentHours to update
     */
    where?: AppointmentHoursWhereInput
    /**
     * Limit how many AppointmentHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AppointmentHours upsert
   */
  export type AppointmentHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointmentHours to update in case it exists.
     */
    where: AppointmentHoursWhereUniqueInput
    /**
     * In case the AppointmentHours found by the `where` argument doesn't exist, create a new AppointmentHours with this data.
     */
    create: XOR<AppointmentHoursCreateInput, AppointmentHoursUncheckedCreateInput>
    /**
     * In case the AppointmentHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentHoursUpdateInput, AppointmentHoursUncheckedUpdateInput>
  }

  /**
   * AppointmentHours delete
   */
  export type AppointmentHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
    /**
     * Filter which AppointmentHours to delete.
     */
    where: AppointmentHoursWhereUniqueInput
  }

  /**
   * AppointmentHours deleteMany
   */
  export type AppointmentHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentHours to delete
     */
    where?: AppointmentHoursWhereInput
    /**
     * Limit how many AppointmentHours to delete.
     */
    limit?: number
  }

  /**
   * AppointmentHours without action
   */
  export type AppointmentHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentHours
     */
    select?: AppointmentHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentHours
     */
    omit?: AppointmentHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentHoursInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyScheduleTemplate
   */

  export type AggregateWeeklyScheduleTemplate = {
    _count: WeeklyScheduleTemplateCountAggregateOutputType | null
    _avg: WeeklyScheduleTemplateAvgAggregateOutputType | null
    _sum: WeeklyScheduleTemplateSumAggregateOutputType | null
    _min: WeeklyScheduleTemplateMinAggregateOutputType | null
    _max: WeeklyScheduleTemplateMaxAggregateOutputType | null
  }

  export type WeeklyScheduleTemplateAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
  }

  export type WeeklyScheduleTemplateSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
  }

  export type WeeklyScheduleTemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    doctorId: number | null
  }

  export type WeeklyScheduleTemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    doctorId: number | null
  }

  export type WeeklyScheduleTemplateCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    effectiveFrom: number
    effectiveTo: number
    createdAt: number
    updatedAt: number
    doctorId: number
    _all: number
  }


  export type WeeklyScheduleTemplateAvgAggregateInputType = {
    id?: true
    doctorId?: true
  }

  export type WeeklyScheduleTemplateSumAggregateInputType = {
    id?: true
    doctorId?: true
  }

  export type WeeklyScheduleTemplateMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
    doctorId?: true
  }

  export type WeeklyScheduleTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
    doctorId?: true
  }

  export type WeeklyScheduleTemplateCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
    doctorId?: true
    _all?: true
  }

  export type WeeklyScheduleTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyScheduleTemplate to aggregate.
     */
    where?: WeeklyScheduleTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScheduleTemplates to fetch.
     */
    orderBy?: WeeklyScheduleTemplateOrderByWithRelationInput | WeeklyScheduleTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyScheduleTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScheduleTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScheduleTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyScheduleTemplates
    **/
    _count?: true | WeeklyScheduleTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyScheduleTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyScheduleTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyScheduleTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyScheduleTemplateMaxAggregateInputType
  }

  export type GetWeeklyScheduleTemplateAggregateType<T extends WeeklyScheduleTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyScheduleTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyScheduleTemplate[P]>
      : GetScalarType<T[P], AggregateWeeklyScheduleTemplate[P]>
  }




  export type WeeklyScheduleTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyScheduleTemplateWhereInput
    orderBy?: WeeklyScheduleTemplateOrderByWithAggregationInput | WeeklyScheduleTemplateOrderByWithAggregationInput[]
    by: WeeklyScheduleTemplateScalarFieldEnum[] | WeeklyScheduleTemplateScalarFieldEnum
    having?: WeeklyScheduleTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyScheduleTemplateCountAggregateInputType | true
    _avg?: WeeklyScheduleTemplateAvgAggregateInputType
    _sum?: WeeklyScheduleTemplateSumAggregateInputType
    _min?: WeeklyScheduleTemplateMinAggregateInputType
    _max?: WeeklyScheduleTemplateMaxAggregateInputType
  }

  export type WeeklyScheduleTemplateGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    effectiveFrom: Date
    effectiveTo: Date | null
    createdAt: Date
    updatedAt: Date
    doctorId: number
    _count: WeeklyScheduleTemplateCountAggregateOutputType | null
    _avg: WeeklyScheduleTemplateAvgAggregateOutputType | null
    _sum: WeeklyScheduleTemplateSumAggregateOutputType | null
    _min: WeeklyScheduleTemplateMinAggregateOutputType | null
    _max: WeeklyScheduleTemplateMaxAggregateOutputType | null
  }

  type GetWeeklyScheduleTemplateGroupByPayload<T extends WeeklyScheduleTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyScheduleTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyScheduleTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyScheduleTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyScheduleTemplateGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyScheduleTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    timeSlots?: boolean | WeeklyScheduleTemplate$timeSlotsArgs<ExtArgs>
    _count?: boolean | WeeklyScheduleTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyScheduleTemplate"]>

  export type WeeklyScheduleTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyScheduleTemplate"]>

  export type WeeklyScheduleTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyScheduleTemplate"]>

  export type WeeklyScheduleTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctorId?: boolean
  }

  export type WeeklyScheduleTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "effectiveFrom" | "effectiveTo" | "createdAt" | "updatedAt" | "doctorId", ExtArgs["result"]["weeklyScheduleTemplate"]>
  export type WeeklyScheduleTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    timeSlots?: boolean | WeeklyScheduleTemplate$timeSlotsArgs<ExtArgs>
    _count?: boolean | WeeklyScheduleTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeeklyScheduleTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyScheduleTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklyScheduleTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyScheduleTemplate"
    objects: {
      doctor: Prisma.$UserPayload<ExtArgs>
      timeSlots: Prisma.$WeeklyTimeSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      effectiveFrom: Date
      effectiveTo: Date | null
      createdAt: Date
      updatedAt: Date
      doctorId: number
    }, ExtArgs["result"]["weeklyScheduleTemplate"]>
    composites: {}
  }

  type WeeklyScheduleTemplateGetPayload<S extends boolean | null | undefined | WeeklyScheduleTemplateDefaultArgs> = $Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload, S>

  type WeeklyScheduleTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyScheduleTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyScheduleTemplateCountAggregateInputType | true
    }

  export interface WeeklyScheduleTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyScheduleTemplate'], meta: { name: 'WeeklyScheduleTemplate' } }
    /**
     * Find zero or one WeeklyScheduleTemplate that matches the filter.
     * @param {WeeklyScheduleTemplateFindUniqueArgs} args - Arguments to find a WeeklyScheduleTemplate
     * @example
     * // Get one WeeklyScheduleTemplate
     * const weeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyScheduleTemplateFindUniqueArgs>(args: SelectSubset<T, WeeklyScheduleTemplateFindUniqueArgs<ExtArgs>>): Prisma__WeeklyScheduleTemplateClient<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyScheduleTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyScheduleTemplateFindUniqueOrThrowArgs} args - Arguments to find a WeeklyScheduleTemplate
     * @example
     * // Get one WeeklyScheduleTemplate
     * const weeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyScheduleTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyScheduleTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyScheduleTemplateClient<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyScheduleTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScheduleTemplateFindFirstArgs} args - Arguments to find a WeeklyScheduleTemplate
     * @example
     * // Get one WeeklyScheduleTemplate
     * const weeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyScheduleTemplateFindFirstArgs>(args?: SelectSubset<T, WeeklyScheduleTemplateFindFirstArgs<ExtArgs>>): Prisma__WeeklyScheduleTemplateClient<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyScheduleTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScheduleTemplateFindFirstOrThrowArgs} args - Arguments to find a WeeklyScheduleTemplate
     * @example
     * // Get one WeeklyScheduleTemplate
     * const weeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyScheduleTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyScheduleTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyScheduleTemplateClient<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyScheduleTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScheduleTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyScheduleTemplates
     * const weeklyScheduleTemplates = await prisma.weeklyScheduleTemplate.findMany()
     * 
     * // Get first 10 WeeklyScheduleTemplates
     * const weeklyScheduleTemplates = await prisma.weeklyScheduleTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyScheduleTemplateWithIdOnly = await prisma.weeklyScheduleTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyScheduleTemplateFindManyArgs>(args?: SelectSubset<T, WeeklyScheduleTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyScheduleTemplate.
     * @param {WeeklyScheduleTemplateCreateArgs} args - Arguments to create a WeeklyScheduleTemplate.
     * @example
     * // Create one WeeklyScheduleTemplate
     * const WeeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.create({
     *   data: {
     *     // ... data to create a WeeklyScheduleTemplate
     *   }
     * })
     * 
     */
    create<T extends WeeklyScheduleTemplateCreateArgs>(args: SelectSubset<T, WeeklyScheduleTemplateCreateArgs<ExtArgs>>): Prisma__WeeklyScheduleTemplateClient<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyScheduleTemplates.
     * @param {WeeklyScheduleTemplateCreateManyArgs} args - Arguments to create many WeeklyScheduleTemplates.
     * @example
     * // Create many WeeklyScheduleTemplates
     * const weeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyScheduleTemplateCreateManyArgs>(args?: SelectSubset<T, WeeklyScheduleTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyScheduleTemplates and returns the data saved in the database.
     * @param {WeeklyScheduleTemplateCreateManyAndReturnArgs} args - Arguments to create many WeeklyScheduleTemplates.
     * @example
     * // Create many WeeklyScheduleTemplates
     * const weeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyScheduleTemplates and only return the `id`
     * const weeklyScheduleTemplateWithIdOnly = await prisma.weeklyScheduleTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyScheduleTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyScheduleTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklyScheduleTemplate.
     * @param {WeeklyScheduleTemplateDeleteArgs} args - Arguments to delete one WeeklyScheduleTemplate.
     * @example
     * // Delete one WeeklyScheduleTemplate
     * const WeeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.delete({
     *   where: {
     *     // ... filter to delete one WeeklyScheduleTemplate
     *   }
     * })
     * 
     */
    delete<T extends WeeklyScheduleTemplateDeleteArgs>(args: SelectSubset<T, WeeklyScheduleTemplateDeleteArgs<ExtArgs>>): Prisma__WeeklyScheduleTemplateClient<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyScheduleTemplate.
     * @param {WeeklyScheduleTemplateUpdateArgs} args - Arguments to update one WeeklyScheduleTemplate.
     * @example
     * // Update one WeeklyScheduleTemplate
     * const weeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyScheduleTemplateUpdateArgs>(args: SelectSubset<T, WeeklyScheduleTemplateUpdateArgs<ExtArgs>>): Prisma__WeeklyScheduleTemplateClient<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyScheduleTemplates.
     * @param {WeeklyScheduleTemplateDeleteManyArgs} args - Arguments to filter WeeklyScheduleTemplates to delete.
     * @example
     * // Delete a few WeeklyScheduleTemplates
     * const { count } = await prisma.weeklyScheduleTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyScheduleTemplateDeleteManyArgs>(args?: SelectSubset<T, WeeklyScheduleTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyScheduleTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScheduleTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyScheduleTemplates
     * const weeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyScheduleTemplateUpdateManyArgs>(args: SelectSubset<T, WeeklyScheduleTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyScheduleTemplates and returns the data updated in the database.
     * @param {WeeklyScheduleTemplateUpdateManyAndReturnArgs} args - Arguments to update many WeeklyScheduleTemplates.
     * @example
     * // Update many WeeklyScheduleTemplates
     * const weeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklyScheduleTemplates and only return the `id`
     * const weeklyScheduleTemplateWithIdOnly = await prisma.weeklyScheduleTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeeklyScheduleTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyScheduleTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklyScheduleTemplate.
     * @param {WeeklyScheduleTemplateUpsertArgs} args - Arguments to update or create a WeeklyScheduleTemplate.
     * @example
     * // Update or create a WeeklyScheduleTemplate
     * const weeklyScheduleTemplate = await prisma.weeklyScheduleTemplate.upsert({
     *   create: {
     *     // ... data to create a WeeklyScheduleTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyScheduleTemplate we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyScheduleTemplateUpsertArgs>(args: SelectSubset<T, WeeklyScheduleTemplateUpsertArgs<ExtArgs>>): Prisma__WeeklyScheduleTemplateClient<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklyScheduleTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScheduleTemplateCountArgs} args - Arguments to filter WeeklyScheduleTemplates to count.
     * @example
     * // Count the number of WeeklyScheduleTemplates
     * const count = await prisma.weeklyScheduleTemplate.count({
     *   where: {
     *     // ... the filter for the WeeklyScheduleTemplates we want to count
     *   }
     * })
    **/
    count<T extends WeeklyScheduleTemplateCountArgs>(
      args?: Subset<T, WeeklyScheduleTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyScheduleTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyScheduleTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScheduleTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyScheduleTemplateAggregateArgs>(args: Subset<T, WeeklyScheduleTemplateAggregateArgs>): Prisma.PrismaPromise<GetWeeklyScheduleTemplateAggregateType<T>>

    /**
     * Group by WeeklyScheduleTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScheduleTemplateGroupByArgs} args - Group by arguments.
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
      T extends WeeklyScheduleTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyScheduleTemplateGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyScheduleTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklyScheduleTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyScheduleTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyScheduleTemplate model
   */
  readonly fields: WeeklyScheduleTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyScheduleTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyScheduleTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timeSlots<T extends WeeklyScheduleTemplate$timeSlotsArgs<ExtArgs> = {}>(args?: Subset<T, WeeklyScheduleTemplate$timeSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WeeklyScheduleTemplate model
   */
  interface WeeklyScheduleTemplateFieldRefs {
    readonly id: FieldRef<"WeeklyScheduleTemplate", 'Int'>
    readonly name: FieldRef<"WeeklyScheduleTemplate", 'String'>
    readonly isActive: FieldRef<"WeeklyScheduleTemplate", 'Boolean'>
    readonly effectiveFrom: FieldRef<"WeeklyScheduleTemplate", 'DateTime'>
    readonly effectiveTo: FieldRef<"WeeklyScheduleTemplate", 'DateTime'>
    readonly createdAt: FieldRef<"WeeklyScheduleTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"WeeklyScheduleTemplate", 'DateTime'>
    readonly doctorId: FieldRef<"WeeklyScheduleTemplate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyScheduleTemplate findUnique
   */
  export type WeeklyScheduleTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScheduleTemplate to fetch.
     */
    where: WeeklyScheduleTemplateWhereUniqueInput
  }

  /**
   * WeeklyScheduleTemplate findUniqueOrThrow
   */
  export type WeeklyScheduleTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScheduleTemplate to fetch.
     */
    where: WeeklyScheduleTemplateWhereUniqueInput
  }

  /**
   * WeeklyScheduleTemplate findFirst
   */
  export type WeeklyScheduleTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScheduleTemplate to fetch.
     */
    where?: WeeklyScheduleTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScheduleTemplates to fetch.
     */
    orderBy?: WeeklyScheduleTemplateOrderByWithRelationInput | WeeklyScheduleTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyScheduleTemplates.
     */
    cursor?: WeeklyScheduleTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScheduleTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScheduleTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyScheduleTemplates.
     */
    distinct?: WeeklyScheduleTemplateScalarFieldEnum | WeeklyScheduleTemplateScalarFieldEnum[]
  }

  /**
   * WeeklyScheduleTemplate findFirstOrThrow
   */
  export type WeeklyScheduleTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScheduleTemplate to fetch.
     */
    where?: WeeklyScheduleTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScheduleTemplates to fetch.
     */
    orderBy?: WeeklyScheduleTemplateOrderByWithRelationInput | WeeklyScheduleTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyScheduleTemplates.
     */
    cursor?: WeeklyScheduleTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScheduleTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScheduleTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyScheduleTemplates.
     */
    distinct?: WeeklyScheduleTemplateScalarFieldEnum | WeeklyScheduleTemplateScalarFieldEnum[]
  }

  /**
   * WeeklyScheduleTemplate findMany
   */
  export type WeeklyScheduleTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScheduleTemplates to fetch.
     */
    where?: WeeklyScheduleTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScheduleTemplates to fetch.
     */
    orderBy?: WeeklyScheduleTemplateOrderByWithRelationInput | WeeklyScheduleTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyScheduleTemplates.
     */
    cursor?: WeeklyScheduleTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScheduleTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScheduleTemplates.
     */
    skip?: number
    distinct?: WeeklyScheduleTemplateScalarFieldEnum | WeeklyScheduleTemplateScalarFieldEnum[]
  }

  /**
   * WeeklyScheduleTemplate create
   */
  export type WeeklyScheduleTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyScheduleTemplate.
     */
    data: XOR<WeeklyScheduleTemplateCreateInput, WeeklyScheduleTemplateUncheckedCreateInput>
  }

  /**
   * WeeklyScheduleTemplate createMany
   */
  export type WeeklyScheduleTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyScheduleTemplates.
     */
    data: WeeklyScheduleTemplateCreateManyInput | WeeklyScheduleTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyScheduleTemplate createManyAndReturn
   */
  export type WeeklyScheduleTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklyScheduleTemplates.
     */
    data: WeeklyScheduleTemplateCreateManyInput | WeeklyScheduleTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyScheduleTemplate update
   */
  export type WeeklyScheduleTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyScheduleTemplate.
     */
    data: XOR<WeeklyScheduleTemplateUpdateInput, WeeklyScheduleTemplateUncheckedUpdateInput>
    /**
     * Choose, which WeeklyScheduleTemplate to update.
     */
    where: WeeklyScheduleTemplateWhereUniqueInput
  }

  /**
   * WeeklyScheduleTemplate updateMany
   */
  export type WeeklyScheduleTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyScheduleTemplates.
     */
    data: XOR<WeeklyScheduleTemplateUpdateManyMutationInput, WeeklyScheduleTemplateUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyScheduleTemplates to update
     */
    where?: WeeklyScheduleTemplateWhereInput
    /**
     * Limit how many WeeklyScheduleTemplates to update.
     */
    limit?: number
  }

  /**
   * WeeklyScheduleTemplate updateManyAndReturn
   */
  export type WeeklyScheduleTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * The data used to update WeeklyScheduleTemplates.
     */
    data: XOR<WeeklyScheduleTemplateUpdateManyMutationInput, WeeklyScheduleTemplateUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyScheduleTemplates to update
     */
    where?: WeeklyScheduleTemplateWhereInput
    /**
     * Limit how many WeeklyScheduleTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyScheduleTemplate upsert
   */
  export type WeeklyScheduleTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyScheduleTemplate to update in case it exists.
     */
    where: WeeklyScheduleTemplateWhereUniqueInput
    /**
     * In case the WeeklyScheduleTemplate found by the `where` argument doesn't exist, create a new WeeklyScheduleTemplate with this data.
     */
    create: XOR<WeeklyScheduleTemplateCreateInput, WeeklyScheduleTemplateUncheckedCreateInput>
    /**
     * In case the WeeklyScheduleTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyScheduleTemplateUpdateInput, WeeklyScheduleTemplateUncheckedUpdateInput>
  }

  /**
   * WeeklyScheduleTemplate delete
   */
  export type WeeklyScheduleTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
    /**
     * Filter which WeeklyScheduleTemplate to delete.
     */
    where: WeeklyScheduleTemplateWhereUniqueInput
  }

  /**
   * WeeklyScheduleTemplate deleteMany
   */
  export type WeeklyScheduleTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyScheduleTemplates to delete
     */
    where?: WeeklyScheduleTemplateWhereInput
    /**
     * Limit how many WeeklyScheduleTemplates to delete.
     */
    limit?: number
  }

  /**
   * WeeklyScheduleTemplate.timeSlots
   */
  export type WeeklyScheduleTemplate$timeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    where?: WeeklyTimeSlotWhereInput
    orderBy?: WeeklyTimeSlotOrderByWithRelationInput | WeeklyTimeSlotOrderByWithRelationInput[]
    cursor?: WeeklyTimeSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyTimeSlotScalarFieldEnum | WeeklyTimeSlotScalarFieldEnum[]
  }

  /**
   * WeeklyScheduleTemplate without action
   */
  export type WeeklyScheduleTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScheduleTemplate
     */
    select?: WeeklyScheduleTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScheduleTemplate
     */
    omit?: WeeklyScheduleTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScheduleTemplateInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyTimeSlot
   */

  export type AggregateWeeklyTimeSlot = {
    _count: WeeklyTimeSlotCountAggregateOutputType | null
    _avg: WeeklyTimeSlotAvgAggregateOutputType | null
    _sum: WeeklyTimeSlotSumAggregateOutputType | null
    _min: WeeklyTimeSlotMinAggregateOutputType | null
    _max: WeeklyTimeSlotMaxAggregateOutputType | null
  }

  export type WeeklyTimeSlotAvgAggregateOutputType = {
    id: number | null
    templateId: number | null
  }

  export type WeeklyTimeSlotSumAggregateOutputType = {
    id: number | null
    templateId: number | null
  }

  export type WeeklyTimeSlotMinAggregateOutputType = {
    id: number | null
    dayOfWeek: $Enums.DayOfWeek | null
    startTime: string | null
    endTime: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    templateId: number | null
  }

  export type WeeklyTimeSlotMaxAggregateOutputType = {
    id: number | null
    dayOfWeek: $Enums.DayOfWeek | null
    startTime: string | null
    endTime: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    templateId: number | null
  }

  export type WeeklyTimeSlotCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    startTime: number
    endTime: number
    isActive: number
    createdAt: number
    updatedAt: number
    templateId: number
    _all: number
  }


  export type WeeklyTimeSlotAvgAggregateInputType = {
    id?: true
    templateId?: true
  }

  export type WeeklyTimeSlotSumAggregateInputType = {
    id?: true
    templateId?: true
  }

  export type WeeklyTimeSlotMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    templateId?: true
  }

  export type WeeklyTimeSlotMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    templateId?: true
  }

  export type WeeklyTimeSlotCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    templateId?: true
    _all?: true
  }

  export type WeeklyTimeSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyTimeSlot to aggregate.
     */
    where?: WeeklyTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyTimeSlots to fetch.
     */
    orderBy?: WeeklyTimeSlotOrderByWithRelationInput | WeeklyTimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyTimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyTimeSlots
    **/
    _count?: true | WeeklyTimeSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyTimeSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyTimeSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyTimeSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyTimeSlotMaxAggregateInputType
  }

  export type GetWeeklyTimeSlotAggregateType<T extends WeeklyTimeSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyTimeSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyTimeSlot[P]>
      : GetScalarType<T[P], AggregateWeeklyTimeSlot[P]>
  }




  export type WeeklyTimeSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyTimeSlotWhereInput
    orderBy?: WeeklyTimeSlotOrderByWithAggregationInput | WeeklyTimeSlotOrderByWithAggregationInput[]
    by: WeeklyTimeSlotScalarFieldEnum[] | WeeklyTimeSlotScalarFieldEnum
    having?: WeeklyTimeSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyTimeSlotCountAggregateInputType | true
    _avg?: WeeklyTimeSlotAvgAggregateInputType
    _sum?: WeeklyTimeSlotSumAggregateInputType
    _min?: WeeklyTimeSlotMinAggregateInputType
    _max?: WeeklyTimeSlotMaxAggregateInputType
  }

  export type WeeklyTimeSlotGroupByOutputType = {
    id: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    templateId: number
    _count: WeeklyTimeSlotCountAggregateOutputType | null
    _avg: WeeklyTimeSlotAvgAggregateOutputType | null
    _sum: WeeklyTimeSlotSumAggregateOutputType | null
    _min: WeeklyTimeSlotMinAggregateOutputType | null
    _max: WeeklyTimeSlotMaxAggregateOutputType | null
  }

  type GetWeeklyTimeSlotGroupByPayload<T extends WeeklyTimeSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyTimeSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyTimeSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyTimeSlotGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyTimeSlotGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyTimeSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateId?: boolean
    template?: boolean | WeeklyScheduleTemplateDefaultArgs<ExtArgs>
    appointments?: boolean | WeeklyTimeSlot$appointmentsArgs<ExtArgs>
    _count?: boolean | WeeklyTimeSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyTimeSlot"]>

  export type WeeklyTimeSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateId?: boolean
    template?: boolean | WeeklyScheduleTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyTimeSlot"]>

  export type WeeklyTimeSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateId?: boolean
    template?: boolean | WeeklyScheduleTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyTimeSlot"]>

  export type WeeklyTimeSlotSelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateId?: boolean
  }

  export type WeeklyTimeSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "startTime" | "endTime" | "isActive" | "createdAt" | "updatedAt" | "templateId", ExtArgs["result"]["weeklyTimeSlot"]>
  export type WeeklyTimeSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | WeeklyScheduleTemplateDefaultArgs<ExtArgs>
    appointments?: boolean | WeeklyTimeSlot$appointmentsArgs<ExtArgs>
    _count?: boolean | WeeklyTimeSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeeklyTimeSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | WeeklyScheduleTemplateDefaultArgs<ExtArgs>
  }
  export type WeeklyTimeSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | WeeklyScheduleTemplateDefaultArgs<ExtArgs>
  }

  export type $WeeklyTimeSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyTimeSlot"
    objects: {
      template: Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dayOfWeek: $Enums.DayOfWeek
      startTime: string
      endTime: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      templateId: number
    }, ExtArgs["result"]["weeklyTimeSlot"]>
    composites: {}
  }

  type WeeklyTimeSlotGetPayload<S extends boolean | null | undefined | WeeklyTimeSlotDefaultArgs> = $Result.GetResult<Prisma.$WeeklyTimeSlotPayload, S>

  type WeeklyTimeSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyTimeSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyTimeSlotCountAggregateInputType | true
    }

  export interface WeeklyTimeSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyTimeSlot'], meta: { name: 'WeeklyTimeSlot' } }
    /**
     * Find zero or one WeeklyTimeSlot that matches the filter.
     * @param {WeeklyTimeSlotFindUniqueArgs} args - Arguments to find a WeeklyTimeSlot
     * @example
     * // Get one WeeklyTimeSlot
     * const weeklyTimeSlot = await prisma.weeklyTimeSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyTimeSlotFindUniqueArgs>(args: SelectSubset<T, WeeklyTimeSlotFindUniqueArgs<ExtArgs>>): Prisma__WeeklyTimeSlotClient<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyTimeSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyTimeSlotFindUniqueOrThrowArgs} args - Arguments to find a WeeklyTimeSlot
     * @example
     * // Get one WeeklyTimeSlot
     * const weeklyTimeSlot = await prisma.weeklyTimeSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyTimeSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyTimeSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyTimeSlotClient<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyTimeSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTimeSlotFindFirstArgs} args - Arguments to find a WeeklyTimeSlot
     * @example
     * // Get one WeeklyTimeSlot
     * const weeklyTimeSlot = await prisma.weeklyTimeSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyTimeSlotFindFirstArgs>(args?: SelectSubset<T, WeeklyTimeSlotFindFirstArgs<ExtArgs>>): Prisma__WeeklyTimeSlotClient<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyTimeSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTimeSlotFindFirstOrThrowArgs} args - Arguments to find a WeeklyTimeSlot
     * @example
     * // Get one WeeklyTimeSlot
     * const weeklyTimeSlot = await prisma.weeklyTimeSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyTimeSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyTimeSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyTimeSlotClient<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyTimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTimeSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyTimeSlots
     * const weeklyTimeSlots = await prisma.weeklyTimeSlot.findMany()
     * 
     * // Get first 10 WeeklyTimeSlots
     * const weeklyTimeSlots = await prisma.weeklyTimeSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyTimeSlotWithIdOnly = await prisma.weeklyTimeSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyTimeSlotFindManyArgs>(args?: SelectSubset<T, WeeklyTimeSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyTimeSlot.
     * @param {WeeklyTimeSlotCreateArgs} args - Arguments to create a WeeklyTimeSlot.
     * @example
     * // Create one WeeklyTimeSlot
     * const WeeklyTimeSlot = await prisma.weeklyTimeSlot.create({
     *   data: {
     *     // ... data to create a WeeklyTimeSlot
     *   }
     * })
     * 
     */
    create<T extends WeeklyTimeSlotCreateArgs>(args: SelectSubset<T, WeeklyTimeSlotCreateArgs<ExtArgs>>): Prisma__WeeklyTimeSlotClient<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyTimeSlots.
     * @param {WeeklyTimeSlotCreateManyArgs} args - Arguments to create many WeeklyTimeSlots.
     * @example
     * // Create many WeeklyTimeSlots
     * const weeklyTimeSlot = await prisma.weeklyTimeSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyTimeSlotCreateManyArgs>(args?: SelectSubset<T, WeeklyTimeSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyTimeSlots and returns the data saved in the database.
     * @param {WeeklyTimeSlotCreateManyAndReturnArgs} args - Arguments to create many WeeklyTimeSlots.
     * @example
     * // Create many WeeklyTimeSlots
     * const weeklyTimeSlot = await prisma.weeklyTimeSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyTimeSlots and only return the `id`
     * const weeklyTimeSlotWithIdOnly = await prisma.weeklyTimeSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyTimeSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyTimeSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklyTimeSlot.
     * @param {WeeklyTimeSlotDeleteArgs} args - Arguments to delete one WeeklyTimeSlot.
     * @example
     * // Delete one WeeklyTimeSlot
     * const WeeklyTimeSlot = await prisma.weeklyTimeSlot.delete({
     *   where: {
     *     // ... filter to delete one WeeklyTimeSlot
     *   }
     * })
     * 
     */
    delete<T extends WeeklyTimeSlotDeleteArgs>(args: SelectSubset<T, WeeklyTimeSlotDeleteArgs<ExtArgs>>): Prisma__WeeklyTimeSlotClient<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyTimeSlot.
     * @param {WeeklyTimeSlotUpdateArgs} args - Arguments to update one WeeklyTimeSlot.
     * @example
     * // Update one WeeklyTimeSlot
     * const weeklyTimeSlot = await prisma.weeklyTimeSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyTimeSlotUpdateArgs>(args: SelectSubset<T, WeeklyTimeSlotUpdateArgs<ExtArgs>>): Prisma__WeeklyTimeSlotClient<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyTimeSlots.
     * @param {WeeklyTimeSlotDeleteManyArgs} args - Arguments to filter WeeklyTimeSlots to delete.
     * @example
     * // Delete a few WeeklyTimeSlots
     * const { count } = await prisma.weeklyTimeSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyTimeSlotDeleteManyArgs>(args?: SelectSubset<T, WeeklyTimeSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyTimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTimeSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyTimeSlots
     * const weeklyTimeSlot = await prisma.weeklyTimeSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyTimeSlotUpdateManyArgs>(args: SelectSubset<T, WeeklyTimeSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyTimeSlots and returns the data updated in the database.
     * @param {WeeklyTimeSlotUpdateManyAndReturnArgs} args - Arguments to update many WeeklyTimeSlots.
     * @example
     * // Update many WeeklyTimeSlots
     * const weeklyTimeSlot = await prisma.weeklyTimeSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklyTimeSlots and only return the `id`
     * const weeklyTimeSlotWithIdOnly = await prisma.weeklyTimeSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeeklyTimeSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyTimeSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklyTimeSlot.
     * @param {WeeklyTimeSlotUpsertArgs} args - Arguments to update or create a WeeklyTimeSlot.
     * @example
     * // Update or create a WeeklyTimeSlot
     * const weeklyTimeSlot = await prisma.weeklyTimeSlot.upsert({
     *   create: {
     *     // ... data to create a WeeklyTimeSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyTimeSlot we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyTimeSlotUpsertArgs>(args: SelectSubset<T, WeeklyTimeSlotUpsertArgs<ExtArgs>>): Prisma__WeeklyTimeSlotClient<$Result.GetResult<Prisma.$WeeklyTimeSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklyTimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTimeSlotCountArgs} args - Arguments to filter WeeklyTimeSlots to count.
     * @example
     * // Count the number of WeeklyTimeSlots
     * const count = await prisma.weeklyTimeSlot.count({
     *   where: {
     *     // ... the filter for the WeeklyTimeSlots we want to count
     *   }
     * })
    **/
    count<T extends WeeklyTimeSlotCountArgs>(
      args?: Subset<T, WeeklyTimeSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyTimeSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyTimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTimeSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyTimeSlotAggregateArgs>(args: Subset<T, WeeklyTimeSlotAggregateArgs>): Prisma.PrismaPromise<GetWeeklyTimeSlotAggregateType<T>>

    /**
     * Group by WeeklyTimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyTimeSlotGroupByArgs} args - Group by arguments.
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
      T extends WeeklyTimeSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyTimeSlotGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyTimeSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklyTimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyTimeSlot model
   */
  readonly fields: WeeklyTimeSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyTimeSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyTimeSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends WeeklyScheduleTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeeklyScheduleTemplateDefaultArgs<ExtArgs>>): Prisma__WeeklyScheduleTemplateClient<$Result.GetResult<Prisma.$WeeklyScheduleTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends WeeklyTimeSlot$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, WeeklyTimeSlot$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WeeklyTimeSlot model
   */
  interface WeeklyTimeSlotFieldRefs {
    readonly id: FieldRef<"WeeklyTimeSlot", 'Int'>
    readonly dayOfWeek: FieldRef<"WeeklyTimeSlot", 'DayOfWeek'>
    readonly startTime: FieldRef<"WeeklyTimeSlot", 'String'>
    readonly endTime: FieldRef<"WeeklyTimeSlot", 'String'>
    readonly isActive: FieldRef<"WeeklyTimeSlot", 'Boolean'>
    readonly createdAt: FieldRef<"WeeklyTimeSlot", 'DateTime'>
    readonly updatedAt: FieldRef<"WeeklyTimeSlot", 'DateTime'>
    readonly templateId: FieldRef<"WeeklyTimeSlot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyTimeSlot findUnique
   */
  export type WeeklyTimeSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyTimeSlot to fetch.
     */
    where: WeeklyTimeSlotWhereUniqueInput
  }

  /**
   * WeeklyTimeSlot findUniqueOrThrow
   */
  export type WeeklyTimeSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyTimeSlot to fetch.
     */
    where: WeeklyTimeSlotWhereUniqueInput
  }

  /**
   * WeeklyTimeSlot findFirst
   */
  export type WeeklyTimeSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyTimeSlot to fetch.
     */
    where?: WeeklyTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyTimeSlots to fetch.
     */
    orderBy?: WeeklyTimeSlotOrderByWithRelationInput | WeeklyTimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyTimeSlots.
     */
    cursor?: WeeklyTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyTimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyTimeSlots.
     */
    distinct?: WeeklyTimeSlotScalarFieldEnum | WeeklyTimeSlotScalarFieldEnum[]
  }

  /**
   * WeeklyTimeSlot findFirstOrThrow
   */
  export type WeeklyTimeSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyTimeSlot to fetch.
     */
    where?: WeeklyTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyTimeSlots to fetch.
     */
    orderBy?: WeeklyTimeSlotOrderByWithRelationInput | WeeklyTimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyTimeSlots.
     */
    cursor?: WeeklyTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyTimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyTimeSlots.
     */
    distinct?: WeeklyTimeSlotScalarFieldEnum | WeeklyTimeSlotScalarFieldEnum[]
  }

  /**
   * WeeklyTimeSlot findMany
   */
  export type WeeklyTimeSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyTimeSlots to fetch.
     */
    where?: WeeklyTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyTimeSlots to fetch.
     */
    orderBy?: WeeklyTimeSlotOrderByWithRelationInput | WeeklyTimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyTimeSlots.
     */
    cursor?: WeeklyTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyTimeSlots.
     */
    skip?: number
    distinct?: WeeklyTimeSlotScalarFieldEnum | WeeklyTimeSlotScalarFieldEnum[]
  }

  /**
   * WeeklyTimeSlot create
   */
  export type WeeklyTimeSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyTimeSlot.
     */
    data: XOR<WeeklyTimeSlotCreateInput, WeeklyTimeSlotUncheckedCreateInput>
  }

  /**
   * WeeklyTimeSlot createMany
   */
  export type WeeklyTimeSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyTimeSlots.
     */
    data: WeeklyTimeSlotCreateManyInput | WeeklyTimeSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyTimeSlot createManyAndReturn
   */
  export type WeeklyTimeSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklyTimeSlots.
     */
    data: WeeklyTimeSlotCreateManyInput | WeeklyTimeSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyTimeSlot update
   */
  export type WeeklyTimeSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyTimeSlot.
     */
    data: XOR<WeeklyTimeSlotUpdateInput, WeeklyTimeSlotUncheckedUpdateInput>
    /**
     * Choose, which WeeklyTimeSlot to update.
     */
    where: WeeklyTimeSlotWhereUniqueInput
  }

  /**
   * WeeklyTimeSlot updateMany
   */
  export type WeeklyTimeSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyTimeSlots.
     */
    data: XOR<WeeklyTimeSlotUpdateManyMutationInput, WeeklyTimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyTimeSlots to update
     */
    where?: WeeklyTimeSlotWhereInput
    /**
     * Limit how many WeeklyTimeSlots to update.
     */
    limit?: number
  }

  /**
   * WeeklyTimeSlot updateManyAndReturn
   */
  export type WeeklyTimeSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * The data used to update WeeklyTimeSlots.
     */
    data: XOR<WeeklyTimeSlotUpdateManyMutationInput, WeeklyTimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyTimeSlots to update
     */
    where?: WeeklyTimeSlotWhereInput
    /**
     * Limit how many WeeklyTimeSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyTimeSlot upsert
   */
  export type WeeklyTimeSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyTimeSlot to update in case it exists.
     */
    where: WeeklyTimeSlotWhereUniqueInput
    /**
     * In case the WeeklyTimeSlot found by the `where` argument doesn't exist, create a new WeeklyTimeSlot with this data.
     */
    create: XOR<WeeklyTimeSlotCreateInput, WeeklyTimeSlotUncheckedCreateInput>
    /**
     * In case the WeeklyTimeSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyTimeSlotUpdateInput, WeeklyTimeSlotUncheckedUpdateInput>
  }

  /**
   * WeeklyTimeSlot delete
   */
  export type WeeklyTimeSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
    /**
     * Filter which WeeklyTimeSlot to delete.
     */
    where: WeeklyTimeSlotWhereUniqueInput
  }

  /**
   * WeeklyTimeSlot deleteMany
   */
  export type WeeklyTimeSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyTimeSlots to delete
     */
    where?: WeeklyTimeSlotWhereInput
    /**
     * Limit how many WeeklyTimeSlots to delete.
     */
    limit?: number
  }

  /**
   * WeeklyTimeSlot.appointments
   */
  export type WeeklyTimeSlot$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * WeeklyTimeSlot without action
   */
  export type WeeklyTimeSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyTimeSlot
     */
    select?: WeeklyTimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyTimeSlot
     */
    omit?: WeeklyTimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyTimeSlotInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionAvgAggregateOutputType = {
    id: number | null
    appointmentId: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type PrescriptionSumAggregateOutputType = {
    id: number | null
    appointmentId: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: number | null
    diagnosis: string | null
    instructions: string | null
    validUntil: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    appointmentId: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: number | null
    diagnosis: string | null
    instructions: string | null
    validUntil: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    appointmentId: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    diagnosis: number
    instructions: number
    validUntil: number
    isActive: number
    createdAt: number
    updatedAt: number
    appointmentId: number
    doctorId: number
    patientId: number
    _all: number
  }


  export type PrescriptionAvgAggregateInputType = {
    id?: true
    appointmentId?: true
    doctorId?: true
    patientId?: true
  }

  export type PrescriptionSumAggregateInputType = {
    id?: true
    appointmentId?: true
    doctorId?: true
    patientId?: true
  }

  export type PrescriptionMinAggregateInputType = {
    id?: true
    diagnosis?: true
    instructions?: true
    validUntil?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    appointmentId?: true
    doctorId?: true
    patientId?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    diagnosis?: true
    instructions?: true
    validUntil?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    appointmentId?: true
    doctorId?: true
    patientId?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    diagnosis?: true
    instructions?: true
    validUntil?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    appointmentId?: true
    doctorId?: true
    patientId?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _avg?: PrescriptionAvgAggregateInputType
    _sum?: PrescriptionSumAggregateInputType
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: number
    diagnosis: string
    instructions: string | null
    validUntil: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    appointmentId: number
    doctorId: number
    patientId: number
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    instructions?: boolean
    validUntil?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointmentId?: boolean
    doctorId?: boolean
    patientId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    medications?: boolean | Prescription$medicationsArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    instructions?: boolean
    validUntil?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointmentId?: boolean
    doctorId?: boolean
    patientId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    instructions?: boolean
    validUntil?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointmentId?: boolean
    doctorId?: boolean
    patientId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    diagnosis?: boolean
    instructions?: boolean
    validUntil?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointmentId?: boolean
    doctorId?: boolean
    patientId?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diagnosis" | "instructions" | "validUntil" | "isActive" | "createdAt" | "updatedAt" | "appointmentId" | "doctorId" | "patientId", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
    medications?: boolean | Prescription$medicationsArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    doctor?: boolean | UserDefaultArgs<ExtArgs>
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      doctor: Prisma.$UserPayload<ExtArgs>
      patient: Prisma.$UserPayload<ExtArgs>
      medications: Prisma.$PrescriptionMedicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      diagnosis: string
      instructions: string | null
      validUntil: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      appointmentId: number
      doctorId: number
      patientId: number
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {PrescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {PrescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medications<T extends Prescription$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'Int'>
    readonly diagnosis: FieldRef<"Prescription", 'String'>
    readonly instructions: FieldRef<"Prescription", 'String'>
    readonly validUntil: FieldRef<"Prescription", 'DateTime'>
    readonly isActive: FieldRef<"Prescription", 'Boolean'>
    readonly createdAt: FieldRef<"Prescription", 'DateTime'>
    readonly updatedAt: FieldRef<"Prescription", 'DateTime'>
    readonly appointmentId: FieldRef<"Prescription", 'Int'>
    readonly doctorId: FieldRef<"Prescription", 'Int'>
    readonly patientId: FieldRef<"Prescription", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription createManyAndReturn
   */
  export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription updateManyAndReturn
   */
  export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription.medications
   */
  export type Prescription$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
    where?: PrescriptionMedicationWhereInput
    orderBy?: PrescriptionMedicationOrderByWithRelationInput | PrescriptionMedicationOrderByWithRelationInput[]
    cursor?: PrescriptionMedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionMedicationScalarFieldEnum | PrescriptionMedicationScalarFieldEnum[]
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model PrescriptionMedication
   */

  export type AggregatePrescriptionMedication = {
    _count: PrescriptionMedicationCountAggregateOutputType | null
    _avg: PrescriptionMedicationAvgAggregateOutputType | null
    _sum: PrescriptionMedicationSumAggregateOutputType | null
    _min: PrescriptionMedicationMinAggregateOutputType | null
    _max: PrescriptionMedicationMaxAggregateOutputType | null
  }

  export type PrescriptionMedicationAvgAggregateOutputType = {
    id: number | null
    prescriptionId: number | null
  }

  export type PrescriptionMedicationSumAggregateOutputType = {
    id: number | null
    prescriptionId: number | null
  }

  export type PrescriptionMedicationMinAggregateOutputType = {
    id: number | null
    medicationName: string | null
    dosage: string | null
    frequency: string | null
    duration: string | null
    instructions: string | null
    createdAt: Date | null
    updatedAt: Date | null
    prescriptionId: number | null
  }

  export type PrescriptionMedicationMaxAggregateOutputType = {
    id: number | null
    medicationName: string | null
    dosage: string | null
    frequency: string | null
    duration: string | null
    instructions: string | null
    createdAt: Date | null
    updatedAt: Date | null
    prescriptionId: number | null
  }

  export type PrescriptionMedicationCountAggregateOutputType = {
    id: number
    medicationName: number
    dosage: number
    frequency: number
    duration: number
    instructions: number
    createdAt: number
    updatedAt: number
    prescriptionId: number
    _all: number
  }


  export type PrescriptionMedicationAvgAggregateInputType = {
    id?: true
    prescriptionId?: true
  }

  export type PrescriptionMedicationSumAggregateInputType = {
    id?: true
    prescriptionId?: true
  }

  export type PrescriptionMedicationMinAggregateInputType = {
    id?: true
    medicationName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
    createdAt?: true
    updatedAt?: true
    prescriptionId?: true
  }

  export type PrescriptionMedicationMaxAggregateInputType = {
    id?: true
    medicationName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
    createdAt?: true
    updatedAt?: true
    prescriptionId?: true
  }

  export type PrescriptionMedicationCountAggregateInputType = {
    id?: true
    medicationName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
    createdAt?: true
    updatedAt?: true
    prescriptionId?: true
    _all?: true
  }

  export type PrescriptionMedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrescriptionMedication to aggregate.
     */
    where?: PrescriptionMedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionMedications to fetch.
     */
    orderBy?: PrescriptionMedicationOrderByWithRelationInput | PrescriptionMedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionMedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionMedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrescriptionMedications
    **/
    _count?: true | PrescriptionMedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionMedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionMedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMedicationMaxAggregateInputType
  }

  export type GetPrescriptionMedicationAggregateType<T extends PrescriptionMedicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescriptionMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescriptionMedication[P]>
      : GetScalarType<T[P], AggregatePrescriptionMedication[P]>
  }




  export type PrescriptionMedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionMedicationWhereInput
    orderBy?: PrescriptionMedicationOrderByWithAggregationInput | PrescriptionMedicationOrderByWithAggregationInput[]
    by: PrescriptionMedicationScalarFieldEnum[] | PrescriptionMedicationScalarFieldEnum
    having?: PrescriptionMedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionMedicationCountAggregateInputType | true
    _avg?: PrescriptionMedicationAvgAggregateInputType
    _sum?: PrescriptionMedicationSumAggregateInputType
    _min?: PrescriptionMedicationMinAggregateInputType
    _max?: PrescriptionMedicationMaxAggregateInputType
  }

  export type PrescriptionMedicationGroupByOutputType = {
    id: number
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions: string | null
    createdAt: Date
    updatedAt: Date
    prescriptionId: number
    _count: PrescriptionMedicationCountAggregateOutputType | null
    _avg: PrescriptionMedicationAvgAggregateOutputType | null
    _sum: PrescriptionMedicationSumAggregateOutputType | null
    _min: PrescriptionMedicationMinAggregateOutputType | null
    _max: PrescriptionMedicationMaxAggregateOutputType | null
  }

  type GetPrescriptionMedicationGroupByPayload<T extends PrescriptionMedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionMedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionMedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionMedicationGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionMedicationGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionMedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prescriptionId?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionMedication"]>

  export type PrescriptionMedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prescriptionId?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionMedication"]>

  export type PrescriptionMedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prescriptionId?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionMedication"]>

  export type PrescriptionMedicationSelectScalar = {
    id?: boolean
    medicationName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prescriptionId?: boolean
  }

  export type PrescriptionMedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicationName" | "dosage" | "frequency" | "duration" | "instructions" | "createdAt" | "updatedAt" | "prescriptionId", ExtArgs["result"]["prescriptionMedication"]>
  export type PrescriptionMedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }
  export type PrescriptionMedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }
  export type PrescriptionMedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
  }

  export type $PrescriptionMedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrescriptionMedication"
    objects: {
      prescription: Prisma.$PrescriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medicationName: string
      dosage: string
      frequency: string
      duration: string
      instructions: string | null
      createdAt: Date
      updatedAt: Date
      prescriptionId: number
    }, ExtArgs["result"]["prescriptionMedication"]>
    composites: {}
  }

  type PrescriptionMedicationGetPayload<S extends boolean | null | undefined | PrescriptionMedicationDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionMedicationPayload, S>

  type PrescriptionMedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionMedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionMedicationCountAggregateInputType | true
    }

  export interface PrescriptionMedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrescriptionMedication'], meta: { name: 'PrescriptionMedication' } }
    /**
     * Find zero or one PrescriptionMedication that matches the filter.
     * @param {PrescriptionMedicationFindUniqueArgs} args - Arguments to find a PrescriptionMedication
     * @example
     * // Get one PrescriptionMedication
     * const prescriptionMedication = await prisma.prescriptionMedication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionMedicationFindUniqueArgs>(args: SelectSubset<T, PrescriptionMedicationFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionMedicationClient<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrescriptionMedication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionMedicationFindUniqueOrThrowArgs} args - Arguments to find a PrescriptionMedication
     * @example
     * // Get one PrescriptionMedication
     * const prescriptionMedication = await prisma.prescriptionMedication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionMedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionMedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionMedicationClient<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrescriptionMedication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicationFindFirstArgs} args - Arguments to find a PrescriptionMedication
     * @example
     * // Get one PrescriptionMedication
     * const prescriptionMedication = await prisma.prescriptionMedication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionMedicationFindFirstArgs>(args?: SelectSubset<T, PrescriptionMedicationFindFirstArgs<ExtArgs>>): Prisma__PrescriptionMedicationClient<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrescriptionMedication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicationFindFirstOrThrowArgs} args - Arguments to find a PrescriptionMedication
     * @example
     * // Get one PrescriptionMedication
     * const prescriptionMedication = await prisma.prescriptionMedication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionMedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionMedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionMedicationClient<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrescriptionMedications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrescriptionMedications
     * const prescriptionMedications = await prisma.prescriptionMedication.findMany()
     * 
     * // Get first 10 PrescriptionMedications
     * const prescriptionMedications = await prisma.prescriptionMedication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionMedicationWithIdOnly = await prisma.prescriptionMedication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionMedicationFindManyArgs>(args?: SelectSubset<T, PrescriptionMedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrescriptionMedication.
     * @param {PrescriptionMedicationCreateArgs} args - Arguments to create a PrescriptionMedication.
     * @example
     * // Create one PrescriptionMedication
     * const PrescriptionMedication = await prisma.prescriptionMedication.create({
     *   data: {
     *     // ... data to create a PrescriptionMedication
     *   }
     * })
     * 
     */
    create<T extends PrescriptionMedicationCreateArgs>(args: SelectSubset<T, PrescriptionMedicationCreateArgs<ExtArgs>>): Prisma__PrescriptionMedicationClient<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrescriptionMedications.
     * @param {PrescriptionMedicationCreateManyArgs} args - Arguments to create many PrescriptionMedications.
     * @example
     * // Create many PrescriptionMedications
     * const prescriptionMedication = await prisma.prescriptionMedication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionMedicationCreateManyArgs>(args?: SelectSubset<T, PrescriptionMedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrescriptionMedications and returns the data saved in the database.
     * @param {PrescriptionMedicationCreateManyAndReturnArgs} args - Arguments to create many PrescriptionMedications.
     * @example
     * // Create many PrescriptionMedications
     * const prescriptionMedication = await prisma.prescriptionMedication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrescriptionMedications and only return the `id`
     * const prescriptionMedicationWithIdOnly = await prisma.prescriptionMedication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionMedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionMedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrescriptionMedication.
     * @param {PrescriptionMedicationDeleteArgs} args - Arguments to delete one PrescriptionMedication.
     * @example
     * // Delete one PrescriptionMedication
     * const PrescriptionMedication = await prisma.prescriptionMedication.delete({
     *   where: {
     *     // ... filter to delete one PrescriptionMedication
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionMedicationDeleteArgs>(args: SelectSubset<T, PrescriptionMedicationDeleteArgs<ExtArgs>>): Prisma__PrescriptionMedicationClient<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrescriptionMedication.
     * @param {PrescriptionMedicationUpdateArgs} args - Arguments to update one PrescriptionMedication.
     * @example
     * // Update one PrescriptionMedication
     * const prescriptionMedication = await prisma.prescriptionMedication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionMedicationUpdateArgs>(args: SelectSubset<T, PrescriptionMedicationUpdateArgs<ExtArgs>>): Prisma__PrescriptionMedicationClient<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrescriptionMedications.
     * @param {PrescriptionMedicationDeleteManyArgs} args - Arguments to filter PrescriptionMedications to delete.
     * @example
     * // Delete a few PrescriptionMedications
     * const { count } = await prisma.prescriptionMedication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionMedicationDeleteManyArgs>(args?: SelectSubset<T, PrescriptionMedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrescriptionMedications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrescriptionMedications
     * const prescriptionMedication = await prisma.prescriptionMedication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionMedicationUpdateManyArgs>(args: SelectSubset<T, PrescriptionMedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrescriptionMedications and returns the data updated in the database.
     * @param {PrescriptionMedicationUpdateManyAndReturnArgs} args - Arguments to update many PrescriptionMedications.
     * @example
     * // Update many PrescriptionMedications
     * const prescriptionMedication = await prisma.prescriptionMedication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrescriptionMedications and only return the `id`
     * const prescriptionMedicationWithIdOnly = await prisma.prescriptionMedication.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrescriptionMedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionMedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrescriptionMedication.
     * @param {PrescriptionMedicationUpsertArgs} args - Arguments to update or create a PrescriptionMedication.
     * @example
     * // Update or create a PrescriptionMedication
     * const prescriptionMedication = await prisma.prescriptionMedication.upsert({
     *   create: {
     *     // ... data to create a PrescriptionMedication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrescriptionMedication we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionMedicationUpsertArgs>(args: SelectSubset<T, PrescriptionMedicationUpsertArgs<ExtArgs>>): Prisma__PrescriptionMedicationClient<$Result.GetResult<Prisma.$PrescriptionMedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrescriptionMedications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicationCountArgs} args - Arguments to filter PrescriptionMedications to count.
     * @example
     * // Count the number of PrescriptionMedications
     * const count = await prisma.prescriptionMedication.count({
     *   where: {
     *     // ... the filter for the PrescriptionMedications we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionMedicationCountArgs>(
      args?: Subset<T, PrescriptionMedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionMedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrescriptionMedication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionMedicationAggregateArgs>(args: Subset<T, PrescriptionMedicationAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionMedicationAggregateType<T>>

    /**
     * Group by PrescriptionMedication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionMedicationGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionMedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionMedicationGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionMedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionMedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrescriptionMedication model
   */
  readonly fields: PrescriptionMedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrescriptionMedication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionMedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescription<T extends PrescriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrescriptionDefaultArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PrescriptionMedication model
   */
  interface PrescriptionMedicationFieldRefs {
    readonly id: FieldRef<"PrescriptionMedication", 'Int'>
    readonly medicationName: FieldRef<"PrescriptionMedication", 'String'>
    readonly dosage: FieldRef<"PrescriptionMedication", 'String'>
    readonly frequency: FieldRef<"PrescriptionMedication", 'String'>
    readonly duration: FieldRef<"PrescriptionMedication", 'String'>
    readonly instructions: FieldRef<"PrescriptionMedication", 'String'>
    readonly createdAt: FieldRef<"PrescriptionMedication", 'DateTime'>
    readonly updatedAt: FieldRef<"PrescriptionMedication", 'DateTime'>
    readonly prescriptionId: FieldRef<"PrescriptionMedication", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PrescriptionMedication findUnique
   */
  export type PrescriptionMedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionMedication to fetch.
     */
    where: PrescriptionMedicationWhereUniqueInput
  }

  /**
   * PrescriptionMedication findUniqueOrThrow
   */
  export type PrescriptionMedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionMedication to fetch.
     */
    where: PrescriptionMedicationWhereUniqueInput
  }

  /**
   * PrescriptionMedication findFirst
   */
  export type PrescriptionMedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionMedication to fetch.
     */
    where?: PrescriptionMedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionMedications to fetch.
     */
    orderBy?: PrescriptionMedicationOrderByWithRelationInput | PrescriptionMedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionMedications.
     */
    cursor?: PrescriptionMedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionMedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionMedications.
     */
    distinct?: PrescriptionMedicationScalarFieldEnum | PrescriptionMedicationScalarFieldEnum[]
  }

  /**
   * PrescriptionMedication findFirstOrThrow
   */
  export type PrescriptionMedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionMedication to fetch.
     */
    where?: PrescriptionMedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionMedications to fetch.
     */
    orderBy?: PrescriptionMedicationOrderByWithRelationInput | PrescriptionMedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionMedications.
     */
    cursor?: PrescriptionMedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionMedications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionMedications.
     */
    distinct?: PrescriptionMedicationScalarFieldEnum | PrescriptionMedicationScalarFieldEnum[]
  }

  /**
   * PrescriptionMedication findMany
   */
  export type PrescriptionMedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionMedications to fetch.
     */
    where?: PrescriptionMedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionMedications to fetch.
     */
    orderBy?: PrescriptionMedicationOrderByWithRelationInput | PrescriptionMedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrescriptionMedications.
     */
    cursor?: PrescriptionMedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionMedications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionMedications.
     */
    skip?: number
    distinct?: PrescriptionMedicationScalarFieldEnum | PrescriptionMedicationScalarFieldEnum[]
  }

  /**
   * PrescriptionMedication create
   */
  export type PrescriptionMedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a PrescriptionMedication.
     */
    data: XOR<PrescriptionMedicationCreateInput, PrescriptionMedicationUncheckedCreateInput>
  }

  /**
   * PrescriptionMedication createMany
   */
  export type PrescriptionMedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrescriptionMedications.
     */
    data: PrescriptionMedicationCreateManyInput | PrescriptionMedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrescriptionMedication createManyAndReturn
   */
  export type PrescriptionMedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * The data used to create many PrescriptionMedications.
     */
    data: PrescriptionMedicationCreateManyInput | PrescriptionMedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrescriptionMedication update
   */
  export type PrescriptionMedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a PrescriptionMedication.
     */
    data: XOR<PrescriptionMedicationUpdateInput, PrescriptionMedicationUncheckedUpdateInput>
    /**
     * Choose, which PrescriptionMedication to update.
     */
    where: PrescriptionMedicationWhereUniqueInput
  }

  /**
   * PrescriptionMedication updateMany
   */
  export type PrescriptionMedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrescriptionMedications.
     */
    data: XOR<PrescriptionMedicationUpdateManyMutationInput, PrescriptionMedicationUncheckedUpdateManyInput>
    /**
     * Filter which PrescriptionMedications to update
     */
    where?: PrescriptionMedicationWhereInput
    /**
     * Limit how many PrescriptionMedications to update.
     */
    limit?: number
  }

  /**
   * PrescriptionMedication updateManyAndReturn
   */
  export type PrescriptionMedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * The data used to update PrescriptionMedications.
     */
    data: XOR<PrescriptionMedicationUpdateManyMutationInput, PrescriptionMedicationUncheckedUpdateManyInput>
    /**
     * Filter which PrescriptionMedications to update
     */
    where?: PrescriptionMedicationWhereInput
    /**
     * Limit how many PrescriptionMedications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrescriptionMedication upsert
   */
  export type PrescriptionMedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the PrescriptionMedication to update in case it exists.
     */
    where: PrescriptionMedicationWhereUniqueInput
    /**
     * In case the PrescriptionMedication found by the `where` argument doesn't exist, create a new PrescriptionMedication with this data.
     */
    create: XOR<PrescriptionMedicationCreateInput, PrescriptionMedicationUncheckedCreateInput>
    /**
     * In case the PrescriptionMedication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionMedicationUpdateInput, PrescriptionMedicationUncheckedUpdateInput>
  }

  /**
   * PrescriptionMedication delete
   */
  export type PrescriptionMedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
    /**
     * Filter which PrescriptionMedication to delete.
     */
    where: PrescriptionMedicationWhereUniqueInput
  }

  /**
   * PrescriptionMedication deleteMany
   */
  export type PrescriptionMedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrescriptionMedications to delete
     */
    where?: PrescriptionMedicationWhereInput
    /**
     * Limit how many PrescriptionMedications to delete.
     */
    limit?: number
  }

  /**
   * PrescriptionMedication without action
   */
  export type PrescriptionMedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionMedication
     */
    select?: PrescriptionMedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionMedication
     */
    omit?: PrescriptionMedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionMedicationInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    role: 'role',
    first_name: 'first_name',
    last_name: 'last_name',
    phone_number: 'phone_number',
    birth_date: 'birth_date',
    gender: 'gender',
    specialty: 'specialty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    typemaladie: 'typemaladie',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    doctorId: 'doctorId',
    patientId: 'patientId',
    timeSlotId: 'timeSlotId'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const DoctorAvailabilityScalarFieldEnum: {
    id: 'id',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    doctorId: 'doctorId'
  };

  export type DoctorAvailabilityScalarFieldEnum = (typeof DoctorAvailabilityScalarFieldEnum)[keyof typeof DoctorAvailabilityScalarFieldEnum]


  export const AppointmentHoursScalarFieldEnum: {
    id: 'id',
    date: 'date',
    hour: 'hour',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    doctorAvailabilityId: 'doctorAvailabilityId'
  };

  export type AppointmentHoursScalarFieldEnum = (typeof AppointmentHoursScalarFieldEnum)[keyof typeof AppointmentHoursScalarFieldEnum]


  export const WeeklyScheduleTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    doctorId: 'doctorId'
  };

  export type WeeklyScheduleTemplateScalarFieldEnum = (typeof WeeklyScheduleTemplateScalarFieldEnum)[keyof typeof WeeklyScheduleTemplateScalarFieldEnum]


  export const WeeklyTimeSlotScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    templateId: 'templateId'
  };

  export type WeeklyTimeSlotScalarFieldEnum = (typeof WeeklyTimeSlotScalarFieldEnum)[keyof typeof WeeklyTimeSlotScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    diagnosis: 'diagnosis',
    instructions: 'instructions',
    validUntil: 'validUntil',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    appointmentId: 'appointmentId',
    doctorId: 'doctorId',
    patientId: 'patientId'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const PrescriptionMedicationScalarFieldEnum: {
    id: 'id',
    medicationName: 'medicationName',
    dosage: 'dosage',
    frequency: 'frequency',
    duration: 'duration',
    instructions: 'instructions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    prescriptionId: 'prescriptionId'
  };

  export type PrescriptionMedicationScalarFieldEnum = (typeof PrescriptionMedicationScalarFieldEnum)[keyof typeof PrescriptionMedicationScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'MedicalSpecialty'
   */
  export type EnumMedicalSpecialtyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicalSpecialty'>
    


  /**
   * Reference to a field of type 'MedicalSpecialty[]'
   */
  export type ListEnumMedicalSpecialtyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicalSpecialty[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    clerkId?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    birth_date?: DateTimeFilter<"User"> | Date | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    specialty?: EnumMedicalSpecialtyNullableFilter<"User"> | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    weeklySchedules?: WeeklyScheduleTemplateListRelationFilter
    patientAppointments?: AppointmentListRelationFilter
    doctorAppointments?: AppointmentListRelationFilter
    doctorAvailabilities?: DoctorAvailabilityListRelationFilter
    prescriptionsAsDoctor?: PrescriptionListRelationFilter
    prescriptionsAsPatient?: PrescriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    specialty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weeklySchedules?: WeeklyScheduleTemplateOrderByRelationAggregateInput
    patientAppointments?: AppointmentOrderByRelationAggregateInput
    doctorAppointments?: AppointmentOrderByRelationAggregateInput
    doctorAvailabilities?: DoctorAvailabilityOrderByRelationAggregateInput
    prescriptionsAsDoctor?: PrescriptionOrderByRelationAggregateInput
    prescriptionsAsPatient?: PrescriptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    birth_date?: DateTimeFilter<"User"> | Date | string
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    specialty?: EnumMedicalSpecialtyNullableFilter<"User"> | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    weeklySchedules?: WeeklyScheduleTemplateListRelationFilter
    patientAppointments?: AppointmentListRelationFilter
    doctorAppointments?: AppointmentListRelationFilter
    doctorAvailabilities?: DoctorAvailabilityListRelationFilter
    prescriptionsAsDoctor?: PrescriptionListRelationFilter
    prescriptionsAsPatient?: PrescriptionListRelationFilter
  }, "id" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    specialty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    clerkId?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    birth_date?: DateTimeWithAggregatesFilter<"User"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    specialty?: EnumMedicalSpecialtyNullableWithAggregatesFilter<"User"> | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    typemaladie?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    timeSlotId?: IntNullableFilter<"Appointment"> | number | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeSlot?: XOR<WeeklyTimeSlotNullableScalarRelationFilter, WeeklyTimeSlotWhereInput> | null
    prescription?: XOR<PrescriptionNullableScalarRelationFilter, PrescriptionWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    typemaladie?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    timeSlotId?: SortOrderInput | SortOrder
    doctor?: UserOrderByWithRelationInput
    patient?: UserOrderByWithRelationInput
    timeSlot?: WeeklyTimeSlotOrderByWithRelationInput
    prescription?: PrescriptionOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    doctorId_date_startTime?: AppointmentDoctorIdDateStartTimeCompoundUniqueInput
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    typemaladie?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    timeSlotId?: IntNullableFilter<"Appointment"> | number | null
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeSlot?: XOR<WeeklyTimeSlotNullableScalarRelationFilter, WeeklyTimeSlotWhereInput> | null
    prescription?: XOR<PrescriptionNullableScalarRelationFilter, PrescriptionWhereInput> | null
  }, "id" | "doctorId_date_startTime">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    typemaladie?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    timeSlotId?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    startTime?: StringWithAggregatesFilter<"Appointment"> | string
    endTime?: StringWithAggregatesFilter<"Appointment"> | string
    typemaladie?: StringWithAggregatesFilter<"Appointment"> | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    doctorId?: IntWithAggregatesFilter<"Appointment"> | number
    patientId?: IntWithAggregatesFilter<"Appointment"> | number
    timeSlotId?: IntNullableWithAggregatesFilter<"Appointment"> | number | null
  }

  export type DoctorAvailabilityWhereInput = {
    AND?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    OR?: DoctorAvailabilityWhereInput[]
    NOT?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    id?: IntFilter<"DoctorAvailability"> | number
    date?: DateTimeFilter<"DoctorAvailability"> | Date | string
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
    isAvailable?: BoolFilter<"DoctorAvailability"> | boolean
    createdAt?: DateTimeFilter<"DoctorAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorAvailability"> | Date | string
    doctorId?: IntFilter<"DoctorAvailability"> | number
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointmentHours?: AppointmentHoursListRelationFilter
  }

  export type DoctorAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
    doctor?: UserOrderByWithRelationInput
    appointmentHours?: AppointmentHoursOrderByRelationAggregateInput
  }

  export type DoctorAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    doctorId_date_startTime?: DoctorAvailabilityDoctorIdDateStartTimeCompoundUniqueInput
    AND?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    OR?: DoctorAvailabilityWhereInput[]
    NOT?: DoctorAvailabilityWhereInput | DoctorAvailabilityWhereInput[]
    date?: DateTimeFilter<"DoctorAvailability"> | Date | string
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
    isAvailable?: BoolFilter<"DoctorAvailability"> | boolean
    createdAt?: DateTimeFilter<"DoctorAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorAvailability"> | Date | string
    doctorId?: IntFilter<"DoctorAvailability"> | number
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointmentHours?: AppointmentHoursListRelationFilter
  }, "id" | "doctorId_date_startTime">

  export type DoctorAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
    _count?: DoctorAvailabilityCountOrderByAggregateInput
    _avg?: DoctorAvailabilityAvgOrderByAggregateInput
    _max?: DoctorAvailabilityMaxOrderByAggregateInput
    _min?: DoctorAvailabilityMinOrderByAggregateInput
    _sum?: DoctorAvailabilitySumOrderByAggregateInput
  }

  export type DoctorAvailabilityScalarWhereWithAggregatesInput = {
    AND?: DoctorAvailabilityScalarWhereWithAggregatesInput | DoctorAvailabilityScalarWhereWithAggregatesInput[]
    OR?: DoctorAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: DoctorAvailabilityScalarWhereWithAggregatesInput | DoctorAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DoctorAvailability"> | number
    date?: DateTimeWithAggregatesFilter<"DoctorAvailability"> | Date | string
    startTime?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    endTime?: StringWithAggregatesFilter<"DoctorAvailability"> | string
    isAvailable?: BoolWithAggregatesFilter<"DoctorAvailability"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DoctorAvailability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DoctorAvailability"> | Date | string
    doctorId?: IntWithAggregatesFilter<"DoctorAvailability"> | number
  }

  export type AppointmentHoursWhereInput = {
    AND?: AppointmentHoursWhereInput | AppointmentHoursWhereInput[]
    OR?: AppointmentHoursWhereInput[]
    NOT?: AppointmentHoursWhereInput | AppointmentHoursWhereInput[]
    id?: IntFilter<"AppointmentHours"> | number
    date?: StringFilter<"AppointmentHours"> | string
    hour?: StringFilter<"AppointmentHours"> | string
    isAvailable?: BoolFilter<"AppointmentHours"> | boolean
    createdAt?: DateTimeFilter<"AppointmentHours"> | Date | string
    updatedAt?: DateTimeFilter<"AppointmentHours"> | Date | string
    doctorAvailabilityId?: IntFilter<"AppointmentHours"> | number
    doctorAvailability?: XOR<DoctorAvailabilityScalarRelationFilter, DoctorAvailabilityWhereInput>
  }

  export type AppointmentHoursOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    hour?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorAvailabilityId?: SortOrder
    doctorAvailability?: DoctorAvailabilityOrderByWithRelationInput
  }

  export type AppointmentHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentHoursWhereInput | AppointmentHoursWhereInput[]
    OR?: AppointmentHoursWhereInput[]
    NOT?: AppointmentHoursWhereInput | AppointmentHoursWhereInput[]
    date?: StringFilter<"AppointmentHours"> | string
    hour?: StringFilter<"AppointmentHours"> | string
    isAvailable?: BoolFilter<"AppointmentHours"> | boolean
    createdAt?: DateTimeFilter<"AppointmentHours"> | Date | string
    updatedAt?: DateTimeFilter<"AppointmentHours"> | Date | string
    doctorAvailabilityId?: IntFilter<"AppointmentHours"> | number
    doctorAvailability?: XOR<DoctorAvailabilityScalarRelationFilter, DoctorAvailabilityWhereInput>
  }, "id">

  export type AppointmentHoursOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    hour?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorAvailabilityId?: SortOrder
    _count?: AppointmentHoursCountOrderByAggregateInput
    _avg?: AppointmentHoursAvgOrderByAggregateInput
    _max?: AppointmentHoursMaxOrderByAggregateInput
    _min?: AppointmentHoursMinOrderByAggregateInput
    _sum?: AppointmentHoursSumOrderByAggregateInput
  }

  export type AppointmentHoursScalarWhereWithAggregatesInput = {
    AND?: AppointmentHoursScalarWhereWithAggregatesInput | AppointmentHoursScalarWhereWithAggregatesInput[]
    OR?: AppointmentHoursScalarWhereWithAggregatesInput[]
    NOT?: AppointmentHoursScalarWhereWithAggregatesInput | AppointmentHoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppointmentHours"> | number
    date?: StringWithAggregatesFilter<"AppointmentHours"> | string
    hour?: StringWithAggregatesFilter<"AppointmentHours"> | string
    isAvailable?: BoolWithAggregatesFilter<"AppointmentHours"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AppointmentHours"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppointmentHours"> | Date | string
    doctorAvailabilityId?: IntWithAggregatesFilter<"AppointmentHours"> | number
  }

  export type WeeklyScheduleTemplateWhereInput = {
    AND?: WeeklyScheduleTemplateWhereInput | WeeklyScheduleTemplateWhereInput[]
    OR?: WeeklyScheduleTemplateWhereInput[]
    NOT?: WeeklyScheduleTemplateWhereInput | WeeklyScheduleTemplateWhereInput[]
    id?: IntFilter<"WeeklyScheduleTemplate"> | number
    name?: StringFilter<"WeeklyScheduleTemplate"> | string
    isActive?: BoolFilter<"WeeklyScheduleTemplate"> | boolean
    effectiveFrom?: DateTimeFilter<"WeeklyScheduleTemplate"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"WeeklyScheduleTemplate"> | Date | string | null
    createdAt?: DateTimeFilter<"WeeklyScheduleTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyScheduleTemplate"> | Date | string
    doctorId?: IntFilter<"WeeklyScheduleTemplate"> | number
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeSlots?: WeeklyTimeSlotListRelationFilter
  }

  export type WeeklyScheduleTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
    doctor?: UserOrderByWithRelationInput
    timeSlots?: WeeklyTimeSlotOrderByRelationAggregateInput
  }

  export type WeeklyScheduleTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    doctorId_name?: WeeklyScheduleTemplateDoctorIdNameCompoundUniqueInput
    AND?: WeeklyScheduleTemplateWhereInput | WeeklyScheduleTemplateWhereInput[]
    OR?: WeeklyScheduleTemplateWhereInput[]
    NOT?: WeeklyScheduleTemplateWhereInput | WeeklyScheduleTemplateWhereInput[]
    name?: StringFilter<"WeeklyScheduleTemplate"> | string
    isActive?: BoolFilter<"WeeklyScheduleTemplate"> | boolean
    effectiveFrom?: DateTimeFilter<"WeeklyScheduleTemplate"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"WeeklyScheduleTemplate"> | Date | string | null
    createdAt?: DateTimeFilter<"WeeklyScheduleTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyScheduleTemplate"> | Date | string
    doctorId?: IntFilter<"WeeklyScheduleTemplate"> | number
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeSlots?: WeeklyTimeSlotListRelationFilter
  }, "id" | "doctorId_name">

  export type WeeklyScheduleTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
    _count?: WeeklyScheduleTemplateCountOrderByAggregateInput
    _avg?: WeeklyScheduleTemplateAvgOrderByAggregateInput
    _max?: WeeklyScheduleTemplateMaxOrderByAggregateInput
    _min?: WeeklyScheduleTemplateMinOrderByAggregateInput
    _sum?: WeeklyScheduleTemplateSumOrderByAggregateInput
  }

  export type WeeklyScheduleTemplateScalarWhereWithAggregatesInput = {
    AND?: WeeklyScheduleTemplateScalarWhereWithAggregatesInput | WeeklyScheduleTemplateScalarWhereWithAggregatesInput[]
    OR?: WeeklyScheduleTemplateScalarWhereWithAggregatesInput[]
    NOT?: WeeklyScheduleTemplateScalarWhereWithAggregatesInput | WeeklyScheduleTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeeklyScheduleTemplate"> | number
    name?: StringWithAggregatesFilter<"WeeklyScheduleTemplate"> | string
    isActive?: BoolWithAggregatesFilter<"WeeklyScheduleTemplate"> | boolean
    effectiveFrom?: DateTimeWithAggregatesFilter<"WeeklyScheduleTemplate"> | Date | string
    effectiveTo?: DateTimeNullableWithAggregatesFilter<"WeeklyScheduleTemplate"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WeeklyScheduleTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeeklyScheduleTemplate"> | Date | string
    doctorId?: IntWithAggregatesFilter<"WeeklyScheduleTemplate"> | number
  }

  export type WeeklyTimeSlotWhereInput = {
    AND?: WeeklyTimeSlotWhereInput | WeeklyTimeSlotWhereInput[]
    OR?: WeeklyTimeSlotWhereInput[]
    NOT?: WeeklyTimeSlotWhereInput | WeeklyTimeSlotWhereInput[]
    id?: IntFilter<"WeeklyTimeSlot"> | number
    dayOfWeek?: EnumDayOfWeekFilter<"WeeklyTimeSlot"> | $Enums.DayOfWeek
    startTime?: StringFilter<"WeeklyTimeSlot"> | string
    endTime?: StringFilter<"WeeklyTimeSlot"> | string
    isActive?: BoolFilter<"WeeklyTimeSlot"> | boolean
    createdAt?: DateTimeFilter<"WeeklyTimeSlot"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyTimeSlot"> | Date | string
    templateId?: IntFilter<"WeeklyTimeSlot"> | number
    template?: XOR<WeeklyScheduleTemplateScalarRelationFilter, WeeklyScheduleTemplateWhereInput>
    appointments?: AppointmentListRelationFilter
  }

  export type WeeklyTimeSlotOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
    template?: WeeklyScheduleTemplateOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type WeeklyTimeSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    templateId_dayOfWeek_startTime?: WeeklyTimeSlotTemplateIdDayOfWeekStartTimeCompoundUniqueInput
    AND?: WeeklyTimeSlotWhereInput | WeeklyTimeSlotWhereInput[]
    OR?: WeeklyTimeSlotWhereInput[]
    NOT?: WeeklyTimeSlotWhereInput | WeeklyTimeSlotWhereInput[]
    dayOfWeek?: EnumDayOfWeekFilter<"WeeklyTimeSlot"> | $Enums.DayOfWeek
    startTime?: StringFilter<"WeeklyTimeSlot"> | string
    endTime?: StringFilter<"WeeklyTimeSlot"> | string
    isActive?: BoolFilter<"WeeklyTimeSlot"> | boolean
    createdAt?: DateTimeFilter<"WeeklyTimeSlot"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyTimeSlot"> | Date | string
    templateId?: IntFilter<"WeeklyTimeSlot"> | number
    template?: XOR<WeeklyScheduleTemplateScalarRelationFilter, WeeklyScheduleTemplateWhereInput>
    appointments?: AppointmentListRelationFilter
  }, "id" | "templateId_dayOfWeek_startTime">

  export type WeeklyTimeSlotOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
    _count?: WeeklyTimeSlotCountOrderByAggregateInput
    _avg?: WeeklyTimeSlotAvgOrderByAggregateInput
    _max?: WeeklyTimeSlotMaxOrderByAggregateInput
    _min?: WeeklyTimeSlotMinOrderByAggregateInput
    _sum?: WeeklyTimeSlotSumOrderByAggregateInput
  }

  export type WeeklyTimeSlotScalarWhereWithAggregatesInput = {
    AND?: WeeklyTimeSlotScalarWhereWithAggregatesInput | WeeklyTimeSlotScalarWhereWithAggregatesInput[]
    OR?: WeeklyTimeSlotScalarWhereWithAggregatesInput[]
    NOT?: WeeklyTimeSlotScalarWhereWithAggregatesInput | WeeklyTimeSlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeeklyTimeSlot"> | number
    dayOfWeek?: EnumDayOfWeekWithAggregatesFilter<"WeeklyTimeSlot"> | $Enums.DayOfWeek
    startTime?: StringWithAggregatesFilter<"WeeklyTimeSlot"> | string
    endTime?: StringWithAggregatesFilter<"WeeklyTimeSlot"> | string
    isActive?: BoolWithAggregatesFilter<"WeeklyTimeSlot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WeeklyTimeSlot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeeklyTimeSlot"> | Date | string
    templateId?: IntWithAggregatesFilter<"WeeklyTimeSlot"> | number
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: IntFilter<"Prescription"> | number
    diagnosis?: StringFilter<"Prescription"> | string
    instructions?: StringNullableFilter<"Prescription"> | string | null
    validUntil?: DateTimeNullableFilter<"Prescription"> | Date | string | null
    isActive?: BoolFilter<"Prescription"> | boolean
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
    appointmentId?: IntFilter<"Prescription"> | number
    doctorId?: IntFilter<"Prescription"> | number
    patientId?: IntFilter<"Prescription"> | number
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    medications?: PrescriptionMedicationListRelationFilter
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    instructions?: SortOrderInput | SortOrder
    validUntil?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    doctor?: UserOrderByWithRelationInput
    patient?: UserOrderByWithRelationInput
    medications?: PrescriptionMedicationOrderByRelationAggregateInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    appointmentId?: number
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    diagnosis?: StringFilter<"Prescription"> | string
    instructions?: StringNullableFilter<"Prescription"> | string | null
    validUntil?: DateTimeNullableFilter<"Prescription"> | Date | string | null
    isActive?: BoolFilter<"Prescription"> | boolean
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
    doctorId?: IntFilter<"Prescription"> | number
    patientId?: IntFilter<"Prescription"> | number
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    doctor?: XOR<UserScalarRelationFilter, UserWhereInput>
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    medications?: PrescriptionMedicationListRelationFilter
  }, "id" | "appointmentId">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    instructions?: SortOrderInput | SortOrder
    validUntil?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _avg?: PrescriptionAvgOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
    _sum?: PrescriptionSumOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prescription"> | number
    diagnosis?: StringWithAggregatesFilter<"Prescription"> | string
    instructions?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    validUntil?: DateTimeNullableWithAggregatesFilter<"Prescription"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Prescription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
    appointmentId?: IntWithAggregatesFilter<"Prescription"> | number
    doctorId?: IntWithAggregatesFilter<"Prescription"> | number
    patientId?: IntWithAggregatesFilter<"Prescription"> | number
  }

  export type PrescriptionMedicationWhereInput = {
    AND?: PrescriptionMedicationWhereInput | PrescriptionMedicationWhereInput[]
    OR?: PrescriptionMedicationWhereInput[]
    NOT?: PrescriptionMedicationWhereInput | PrescriptionMedicationWhereInput[]
    id?: IntFilter<"PrescriptionMedication"> | number
    medicationName?: StringFilter<"PrescriptionMedication"> | string
    dosage?: StringFilter<"PrescriptionMedication"> | string
    frequency?: StringFilter<"PrescriptionMedication"> | string
    duration?: StringFilter<"PrescriptionMedication"> | string
    instructions?: StringNullableFilter<"PrescriptionMedication"> | string | null
    createdAt?: DateTimeFilter<"PrescriptionMedication"> | Date | string
    updatedAt?: DateTimeFilter<"PrescriptionMedication"> | Date | string
    prescriptionId?: IntFilter<"PrescriptionMedication"> | number
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
  }

  export type PrescriptionMedicationOrderByWithRelationInput = {
    id?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prescriptionId?: SortOrder
    prescription?: PrescriptionOrderByWithRelationInput
  }

  export type PrescriptionMedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrescriptionMedicationWhereInput | PrescriptionMedicationWhereInput[]
    OR?: PrescriptionMedicationWhereInput[]
    NOT?: PrescriptionMedicationWhereInput | PrescriptionMedicationWhereInput[]
    medicationName?: StringFilter<"PrescriptionMedication"> | string
    dosage?: StringFilter<"PrescriptionMedication"> | string
    frequency?: StringFilter<"PrescriptionMedication"> | string
    duration?: StringFilter<"PrescriptionMedication"> | string
    instructions?: StringNullableFilter<"PrescriptionMedication"> | string | null
    createdAt?: DateTimeFilter<"PrescriptionMedication"> | Date | string
    updatedAt?: DateTimeFilter<"PrescriptionMedication"> | Date | string
    prescriptionId?: IntFilter<"PrescriptionMedication"> | number
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
  }, "id">

  export type PrescriptionMedicationOrderByWithAggregationInput = {
    id?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prescriptionId?: SortOrder
    _count?: PrescriptionMedicationCountOrderByAggregateInput
    _avg?: PrescriptionMedicationAvgOrderByAggregateInput
    _max?: PrescriptionMedicationMaxOrderByAggregateInput
    _min?: PrescriptionMedicationMinOrderByAggregateInput
    _sum?: PrescriptionMedicationSumOrderByAggregateInput
  }

  export type PrescriptionMedicationScalarWhereWithAggregatesInput = {
    AND?: PrescriptionMedicationScalarWhereWithAggregatesInput | PrescriptionMedicationScalarWhereWithAggregatesInput[]
    OR?: PrescriptionMedicationScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionMedicationScalarWhereWithAggregatesInput | PrescriptionMedicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrescriptionMedication"> | number
    medicationName?: StringWithAggregatesFilter<"PrescriptionMedication"> | string
    dosage?: StringWithAggregatesFilter<"PrescriptionMedication"> | string
    frequency?: StringWithAggregatesFilter<"PrescriptionMedication"> | string
    duration?: StringWithAggregatesFilter<"PrescriptionMedication"> | string
    instructions?: StringNullableWithAggregatesFilter<"PrescriptionMedication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PrescriptionMedication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PrescriptionMedication"> | Date | string
    prescriptionId?: IntWithAggregatesFilter<"PrescriptionMedication"> | number
  }

  export type UserCreateInput = {
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    doctorAvailabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    doctorAvailabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorAppointmentsInput
    patient: UserCreateNestedOneWithoutPatientAppointmentsInput
    timeSlot?: WeeklyTimeSlotCreateNestedOneWithoutAppointmentsInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
    patientId: number
    timeSlotId?: number | null
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorAppointmentsNestedInput
    patient?: UserUpdateOneRequiredWithoutPatientAppointmentsNestedInput
    timeSlot?: WeeklyTimeSlotUpdateOneWithoutAppointmentsNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    timeSlotId?: NullableIntFieldUpdateOperationsInput | number | null
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
    patientId: number
    timeSlotId?: number | null
  }

  export type AppointmentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    timeSlotId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DoctorAvailabilityCreateInput = {
    date: Date | string
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorAvailabilitiesInput
    appointmentHours?: AppointmentHoursCreateNestedManyWithoutDoctorAvailabilityInput
  }

  export type DoctorAvailabilityUncheckedCreateInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
    appointmentHours?: AppointmentHoursUncheckedCreateNestedManyWithoutDoctorAvailabilityInput
  }

  export type DoctorAvailabilityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorAvailabilitiesNestedInput
    appointmentHours?: AppointmentHoursUpdateManyWithoutDoctorAvailabilityNestedInput
  }

  export type DoctorAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    appointmentHours?: AppointmentHoursUncheckedUpdateManyWithoutDoctorAvailabilityNestedInput
  }

  export type DoctorAvailabilityCreateManyInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
  }

  export type DoctorAvailabilityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentHoursCreateInput = {
    date: string
    hour: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorAvailability: DoctorAvailabilityCreateNestedOneWithoutAppointmentHoursInput
  }

  export type AppointmentHoursUncheckedCreateInput = {
    id?: number
    date: string
    hour: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorAvailabilityId: number
  }

  export type AppointmentHoursUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorAvailability?: DoctorAvailabilityUpdateOneRequiredWithoutAppointmentHoursNestedInput
  }

  export type AppointmentHoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorAvailabilityId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentHoursCreateManyInput = {
    id?: number
    date: string
    hour: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorAvailabilityId: number
  }

  export type AppointmentHoursUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentHoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorAvailabilityId?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyScheduleTemplateCreateInput = {
    name: string
    isActive?: boolean
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutWeeklySchedulesInput
    timeSlots?: WeeklyTimeSlotCreateNestedManyWithoutTemplateInput
  }

  export type WeeklyScheduleTemplateUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
    timeSlots?: WeeklyTimeSlotUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type WeeklyScheduleTemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutWeeklySchedulesNestedInput
    timeSlots?: WeeklyTimeSlotUpdateManyWithoutTemplateNestedInput
  }

  export type WeeklyScheduleTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    timeSlots?: WeeklyTimeSlotUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type WeeklyScheduleTemplateCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
  }

  export type WeeklyScheduleTemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyScheduleTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyTimeSlotCreateInput = {
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    template: WeeklyScheduleTemplateCreateNestedOneWithoutTimeSlotsInput
    appointments?: AppointmentCreateNestedManyWithoutTimeSlotInput
  }

  export type WeeklyTimeSlotUncheckedCreateInput = {
    id?: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templateId: number
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTimeSlotInput
  }

  export type WeeklyTimeSlotUpdateInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: WeeklyScheduleTemplateUpdateOneRequiredWithoutTimeSlotsNestedInput
    appointments?: AppointmentUpdateManyWithoutTimeSlotNestedInput
  }

  export type WeeklyTimeSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: IntFieldUpdateOperationsInput | number
    appointments?: AppointmentUncheckedUpdateManyWithoutTimeSlotNestedInput
  }

  export type WeeklyTimeSlotCreateManyInput = {
    id?: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templateId: number
  }

  export type WeeklyTimeSlotUpdateManyMutationInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyTimeSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionCreateInput = {
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutPrescriptionInput
    doctor: UserCreateNestedOneWithoutPrescriptionsAsDoctorInput
    patient: UserCreateNestedOneWithoutPrescriptionsAsPatientInput
    medications?: PrescriptionMedicationCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: number
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentId: number
    doctorId: number
    patientId: number
    medications?: PrescriptionMedicationUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUpdateInput = {
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutPrescriptionNestedInput
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsAsDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutPrescriptionsAsPatientNestedInput
    medications?: PrescriptionMedicationUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medications?: PrescriptionMedicationUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionCreateManyInput = {
    id?: number
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentId: number
    doctorId: number
    patientId: number
  }

  export type PrescriptionUpdateManyMutationInput = {
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionMedicationCreateInput = {
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescription: PrescriptionCreateNestedOneWithoutMedicationsInput
  }

  export type PrescriptionMedicationUncheckedCreateInput = {
    id?: number
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptionId: number
  }

  export type PrescriptionMedicationUpdateInput = {
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescription?: PrescriptionUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type PrescriptionMedicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptionId?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionMedicationCreateManyInput = {
    id?: number
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptionId: number
  }

  export type PrescriptionMedicationUpdateManyMutationInput = {
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionMedicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptionId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumMedicalSpecialtyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicalSpecialty | EnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    in?: $Enums.MedicalSpecialty[] | ListEnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MedicalSpecialty[] | ListEnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMedicalSpecialtyNullableFilter<$PrismaModel> | $Enums.MedicalSpecialty | null
  }

  export type WeeklyScheduleTemplateListRelationFilter = {
    every?: WeeklyScheduleTemplateWhereInput
    some?: WeeklyScheduleTemplateWhereInput
    none?: WeeklyScheduleTemplateWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type DoctorAvailabilityListRelationFilter = {
    every?: DoctorAvailabilityWhereInput
    some?: DoctorAvailabilityWhereInput
    none?: DoctorAvailabilityWhereInput
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WeeklyScheduleTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    specialty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    specialty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone_number?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    specialty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumMedicalSpecialtyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicalSpecialty | EnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    in?: $Enums.MedicalSpecialty[] | ListEnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MedicalSpecialty[] | ListEnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMedicalSpecialtyNullableWithAggregatesFilter<$PrismaModel> | $Enums.MedicalSpecialty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMedicalSpecialtyNullableFilter<$PrismaModel>
    _max?: NestedEnumMedicalSpecialtyNullableFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WeeklyTimeSlotNullableScalarRelationFilter = {
    is?: WeeklyTimeSlotWhereInput | null
    isNot?: WeeklyTimeSlotWhereInput | null
  }

  export type PrescriptionNullableScalarRelationFilter = {
    is?: PrescriptionWhereInput | null
    isNot?: PrescriptionWhereInput | null
  }

  export type AppointmentDoctorIdDateStartTimeCompoundUniqueInput = {
    doctorId: number
    date: Date | string
    startTime: string
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    typemaladie?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    timeSlotId?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    timeSlotId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    typemaladie?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    timeSlotId?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    typemaladie?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    timeSlotId?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    timeSlotId?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AppointmentHoursListRelationFilter = {
    every?: AppointmentHoursWhereInput
    some?: AppointmentHoursWhereInput
    none?: AppointmentHoursWhereInput
  }

  export type AppointmentHoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorAvailabilityDoctorIdDateStartTimeCompoundUniqueInput = {
    doctorId: number
    date: Date | string
    startTime: string
  }

  export type DoctorAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
  }

  export type DoctorAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
  }

  export type DoctorAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
  }

  export type DoctorAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
  }

  export type DoctorAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DoctorAvailabilityScalarRelationFilter = {
    is?: DoctorAvailabilityWhereInput
    isNot?: DoctorAvailabilityWhereInput
  }

  export type AppointmentHoursCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    hour?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorAvailabilityId?: SortOrder
  }

  export type AppointmentHoursAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorAvailabilityId?: SortOrder
  }

  export type AppointmentHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    hour?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorAvailabilityId?: SortOrder
  }

  export type AppointmentHoursMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    hour?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorAvailabilityId?: SortOrder
  }

  export type AppointmentHoursSumOrderByAggregateInput = {
    id?: SortOrder
    doctorAvailabilityId?: SortOrder
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

  export type WeeklyTimeSlotListRelationFilter = {
    every?: WeeklyTimeSlotWhereInput
    some?: WeeklyTimeSlotWhereInput
    none?: WeeklyTimeSlotWhereInput
  }

  export type WeeklyTimeSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyScheduleTemplateDoctorIdNameCompoundUniqueInput = {
    doctorId: number
    name: string
  }

  export type WeeklyScheduleTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
  }

  export type WeeklyScheduleTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
  }

  export type WeeklyScheduleTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
  }

  export type WeeklyScheduleTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctorId?: SortOrder
  }

  export type WeeklyScheduleTemplateSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
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

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type WeeklyScheduleTemplateScalarRelationFilter = {
    is?: WeeklyScheduleTemplateWhereInput
    isNot?: WeeklyScheduleTemplateWhereInput
  }

  export type WeeklyTimeSlotTemplateIdDayOfWeekStartTimeCompoundUniqueInput = {
    templateId: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
  }

  export type WeeklyTimeSlotCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
  }

  export type WeeklyTimeSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
  }

  export type WeeklyTimeSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
  }

  export type WeeklyTimeSlotMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
  }

  export type WeeklyTimeSlotSumOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type PrescriptionMedicationListRelationFilter = {
    every?: PrescriptionMedicationWhereInput
    some?: PrescriptionMedicationWhereInput
    none?: PrescriptionMedicationWhereInput
  }

  export type PrescriptionMedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    instructions?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type PrescriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    instructions?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    instructions?: SortOrder
    validUntil?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type PrescriptionSumOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type PrescriptionScalarRelationFilter = {
    is?: PrescriptionWhereInput
    isNot?: PrescriptionWhereInput
  }

  export type PrescriptionMedicationCountOrderByAggregateInput = {
    id?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prescriptionId?: SortOrder
  }

  export type PrescriptionMedicationAvgOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
  }

  export type PrescriptionMedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prescriptionId?: SortOrder
  }

  export type PrescriptionMedicationMinOrderByAggregateInput = {
    id?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prescriptionId?: SortOrder
  }

  export type PrescriptionMedicationSumOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
  }

  export type WeeklyScheduleTemplateCreateNestedManyWithoutDoctorInput = {
    create?: XOR<WeeklyScheduleTemplateCreateWithoutDoctorInput, WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput> | WeeklyScheduleTemplateCreateWithoutDoctorInput[] | WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: WeeklyScheduleTemplateCreateOrConnectWithoutDoctorInput | WeeklyScheduleTemplateCreateOrConnectWithoutDoctorInput[]
    createMany?: WeeklyScheduleTemplateCreateManyDoctorInputEnvelope
    connect?: WeeklyScheduleTemplateWhereUniqueInput | WeeklyScheduleTemplateWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DoctorAvailabilityCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type WeeklyScheduleTemplateUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<WeeklyScheduleTemplateCreateWithoutDoctorInput, WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput> | WeeklyScheduleTemplateCreateWithoutDoctorInput[] | WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: WeeklyScheduleTemplateCreateOrConnectWithoutDoctorInput | WeeklyScheduleTemplateCreateOrConnectWithoutDoctorInput[]
    createMany?: WeeklyScheduleTemplateCreateManyDoctorInputEnvelope
    connect?: WeeklyScheduleTemplateWhereUniqueInput | WeeklyScheduleTemplateWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableEnumMedicalSpecialtyFieldUpdateOperationsInput = {
    set?: $Enums.MedicalSpecialty | null
  }

  export type WeeklyScheduleTemplateUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<WeeklyScheduleTemplateCreateWithoutDoctorInput, WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput> | WeeklyScheduleTemplateCreateWithoutDoctorInput[] | WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: WeeklyScheduleTemplateCreateOrConnectWithoutDoctorInput | WeeklyScheduleTemplateCreateOrConnectWithoutDoctorInput[]
    upsert?: WeeklyScheduleTemplateUpsertWithWhereUniqueWithoutDoctorInput | WeeklyScheduleTemplateUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: WeeklyScheduleTemplateCreateManyDoctorInputEnvelope
    set?: WeeklyScheduleTemplateWhereUniqueInput | WeeklyScheduleTemplateWhereUniqueInput[]
    disconnect?: WeeklyScheduleTemplateWhereUniqueInput | WeeklyScheduleTemplateWhereUniqueInput[]
    delete?: WeeklyScheduleTemplateWhereUniqueInput | WeeklyScheduleTemplateWhereUniqueInput[]
    connect?: WeeklyScheduleTemplateWhereUniqueInput | WeeklyScheduleTemplateWhereUniqueInput[]
    update?: WeeklyScheduleTemplateUpdateWithWhereUniqueWithoutDoctorInput | WeeklyScheduleTemplateUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: WeeklyScheduleTemplateUpdateManyWithWhereWithoutDoctorInput | WeeklyScheduleTemplateUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: WeeklyScheduleTemplateScalarWhereInput | WeeklyScheduleTemplateScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DoctorAvailabilityUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    set?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    disconnect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    delete?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    update?: DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput | DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WeeklyScheduleTemplateUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<WeeklyScheduleTemplateCreateWithoutDoctorInput, WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput> | WeeklyScheduleTemplateCreateWithoutDoctorInput[] | WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: WeeklyScheduleTemplateCreateOrConnectWithoutDoctorInput | WeeklyScheduleTemplateCreateOrConnectWithoutDoctorInput[]
    upsert?: WeeklyScheduleTemplateUpsertWithWhereUniqueWithoutDoctorInput | WeeklyScheduleTemplateUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: WeeklyScheduleTemplateCreateManyDoctorInputEnvelope
    set?: WeeklyScheduleTemplateWhereUniqueInput | WeeklyScheduleTemplateWhereUniqueInput[]
    disconnect?: WeeklyScheduleTemplateWhereUniqueInput | WeeklyScheduleTemplateWhereUniqueInput[]
    delete?: WeeklyScheduleTemplateWhereUniqueInput | WeeklyScheduleTemplateWhereUniqueInput[]
    connect?: WeeklyScheduleTemplateWhereUniqueInput | WeeklyScheduleTemplateWhereUniqueInput[]
    update?: WeeklyScheduleTemplateUpdateWithWhereUniqueWithoutDoctorInput | WeeklyScheduleTemplateUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: WeeklyScheduleTemplateUpdateManyWithWhereWithoutDoctorInput | WeeklyScheduleTemplateUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: WeeklyScheduleTemplateScalarWhereInput | WeeklyScheduleTemplateScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput> | DoctorAvailabilityCreateWithoutDoctorInput[] | DoctorAvailabilityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutDoctorInput | DoctorAvailabilityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorAvailabilityCreateManyDoctorInputEnvelope
    set?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    disconnect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    delete?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    connect?: DoctorAvailabilityWhereUniqueInput | DoctorAvailabilityWhereUniqueInput[]
    update?: DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput | DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput | DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDoctorAppointmentsInput = {
    create?: XOR<UserCreateWithoutDoctorAppointmentsInput, UserUncheckedCreateWithoutDoctorAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPatientAppointmentsInput = {
    create?: XOR<UserCreateWithoutPatientAppointmentsInput, UserUncheckedCreateWithoutPatientAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type WeeklyTimeSlotCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<WeeklyTimeSlotCreateWithoutAppointmentsInput, WeeklyTimeSlotUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: WeeklyTimeSlotCreateOrConnectWithoutAppointmentsInput
    connect?: WeeklyTimeSlotWhereUniqueInput
  }

  export type PrescriptionCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutDoctorAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutDoctorAppointmentsInput, UserUncheckedCreateWithoutDoctorAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorAppointmentsInput
    upsert?: UserUpsertWithoutDoctorAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorAppointmentsInput, UserUpdateWithoutDoctorAppointmentsInput>, UserUncheckedUpdateWithoutDoctorAppointmentsInput>
  }

  export type UserUpdateOneRequiredWithoutPatientAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutPatientAppointmentsInput, UserUncheckedCreateWithoutPatientAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientAppointmentsInput
    upsert?: UserUpsertWithoutPatientAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientAppointmentsInput, UserUpdateWithoutPatientAppointmentsInput>, UserUncheckedUpdateWithoutPatientAppointmentsInput>
  }

  export type WeeklyTimeSlotUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<WeeklyTimeSlotCreateWithoutAppointmentsInput, WeeklyTimeSlotUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: WeeklyTimeSlotCreateOrConnectWithoutAppointmentsInput
    upsert?: WeeklyTimeSlotUpsertWithoutAppointmentsInput
    disconnect?: WeeklyTimeSlotWhereInput | boolean
    delete?: WeeklyTimeSlotWhereInput | boolean
    connect?: WeeklyTimeSlotWhereUniqueInput
    update?: XOR<XOR<WeeklyTimeSlotUpdateToOneWithWhereWithoutAppointmentsInput, WeeklyTimeSlotUpdateWithoutAppointmentsInput>, WeeklyTimeSlotUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PrescriptionUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput
    upsert?: PrescriptionUpsertWithoutAppointmentInput
    disconnect?: PrescriptionWhereInput | boolean
    delete?: PrescriptionWhereInput | boolean
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutAppointmentInput, PrescriptionUpdateWithoutAppointmentInput>, PrescriptionUncheckedUpdateWithoutAppointmentInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutAppointmentInput
    upsert?: PrescriptionUpsertWithoutAppointmentInput
    disconnect?: PrescriptionWhereInput | boolean
    delete?: PrescriptionWhereInput | boolean
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutAppointmentInput, PrescriptionUpdateWithoutAppointmentInput>, PrescriptionUncheckedUpdateWithoutAppointmentInput>
  }

  export type UserCreateNestedOneWithoutDoctorAvailabilitiesInput = {
    create?: XOR<UserCreateWithoutDoctorAvailabilitiesInput, UserUncheckedCreateWithoutDoctorAvailabilitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorAvailabilitiesInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentHoursCreateNestedManyWithoutDoctorAvailabilityInput = {
    create?: XOR<AppointmentHoursCreateWithoutDoctorAvailabilityInput, AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput> | AppointmentHoursCreateWithoutDoctorAvailabilityInput[] | AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput[]
    connectOrCreate?: AppointmentHoursCreateOrConnectWithoutDoctorAvailabilityInput | AppointmentHoursCreateOrConnectWithoutDoctorAvailabilityInput[]
    createMany?: AppointmentHoursCreateManyDoctorAvailabilityInputEnvelope
    connect?: AppointmentHoursWhereUniqueInput | AppointmentHoursWhereUniqueInput[]
  }

  export type AppointmentHoursUncheckedCreateNestedManyWithoutDoctorAvailabilityInput = {
    create?: XOR<AppointmentHoursCreateWithoutDoctorAvailabilityInput, AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput> | AppointmentHoursCreateWithoutDoctorAvailabilityInput[] | AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput[]
    connectOrCreate?: AppointmentHoursCreateOrConnectWithoutDoctorAvailabilityInput | AppointmentHoursCreateOrConnectWithoutDoctorAvailabilityInput[]
    createMany?: AppointmentHoursCreateManyDoctorAvailabilityInputEnvelope
    connect?: AppointmentHoursWhereUniqueInput | AppointmentHoursWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutDoctorAvailabilitiesNestedInput = {
    create?: XOR<UserCreateWithoutDoctorAvailabilitiesInput, UserUncheckedCreateWithoutDoctorAvailabilitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorAvailabilitiesInput
    upsert?: UserUpsertWithoutDoctorAvailabilitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorAvailabilitiesInput, UserUpdateWithoutDoctorAvailabilitiesInput>, UserUncheckedUpdateWithoutDoctorAvailabilitiesInput>
  }

  export type AppointmentHoursUpdateManyWithoutDoctorAvailabilityNestedInput = {
    create?: XOR<AppointmentHoursCreateWithoutDoctorAvailabilityInput, AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput> | AppointmentHoursCreateWithoutDoctorAvailabilityInput[] | AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput[]
    connectOrCreate?: AppointmentHoursCreateOrConnectWithoutDoctorAvailabilityInput | AppointmentHoursCreateOrConnectWithoutDoctorAvailabilityInput[]
    upsert?: AppointmentHoursUpsertWithWhereUniqueWithoutDoctorAvailabilityInput | AppointmentHoursUpsertWithWhereUniqueWithoutDoctorAvailabilityInput[]
    createMany?: AppointmentHoursCreateManyDoctorAvailabilityInputEnvelope
    set?: AppointmentHoursWhereUniqueInput | AppointmentHoursWhereUniqueInput[]
    disconnect?: AppointmentHoursWhereUniqueInput | AppointmentHoursWhereUniqueInput[]
    delete?: AppointmentHoursWhereUniqueInput | AppointmentHoursWhereUniqueInput[]
    connect?: AppointmentHoursWhereUniqueInput | AppointmentHoursWhereUniqueInput[]
    update?: AppointmentHoursUpdateWithWhereUniqueWithoutDoctorAvailabilityInput | AppointmentHoursUpdateWithWhereUniqueWithoutDoctorAvailabilityInput[]
    updateMany?: AppointmentHoursUpdateManyWithWhereWithoutDoctorAvailabilityInput | AppointmentHoursUpdateManyWithWhereWithoutDoctorAvailabilityInput[]
    deleteMany?: AppointmentHoursScalarWhereInput | AppointmentHoursScalarWhereInput[]
  }

  export type AppointmentHoursUncheckedUpdateManyWithoutDoctorAvailabilityNestedInput = {
    create?: XOR<AppointmentHoursCreateWithoutDoctorAvailabilityInput, AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput> | AppointmentHoursCreateWithoutDoctorAvailabilityInput[] | AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput[]
    connectOrCreate?: AppointmentHoursCreateOrConnectWithoutDoctorAvailabilityInput | AppointmentHoursCreateOrConnectWithoutDoctorAvailabilityInput[]
    upsert?: AppointmentHoursUpsertWithWhereUniqueWithoutDoctorAvailabilityInput | AppointmentHoursUpsertWithWhereUniqueWithoutDoctorAvailabilityInput[]
    createMany?: AppointmentHoursCreateManyDoctorAvailabilityInputEnvelope
    set?: AppointmentHoursWhereUniqueInput | AppointmentHoursWhereUniqueInput[]
    disconnect?: AppointmentHoursWhereUniqueInput | AppointmentHoursWhereUniqueInput[]
    delete?: AppointmentHoursWhereUniqueInput | AppointmentHoursWhereUniqueInput[]
    connect?: AppointmentHoursWhereUniqueInput | AppointmentHoursWhereUniqueInput[]
    update?: AppointmentHoursUpdateWithWhereUniqueWithoutDoctorAvailabilityInput | AppointmentHoursUpdateWithWhereUniqueWithoutDoctorAvailabilityInput[]
    updateMany?: AppointmentHoursUpdateManyWithWhereWithoutDoctorAvailabilityInput | AppointmentHoursUpdateManyWithWhereWithoutDoctorAvailabilityInput[]
    deleteMany?: AppointmentHoursScalarWhereInput | AppointmentHoursScalarWhereInput[]
  }

  export type DoctorAvailabilityCreateNestedOneWithoutAppointmentHoursInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutAppointmentHoursInput, DoctorAvailabilityUncheckedCreateWithoutAppointmentHoursInput>
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutAppointmentHoursInput
    connect?: DoctorAvailabilityWhereUniqueInput
  }

  export type DoctorAvailabilityUpdateOneRequiredWithoutAppointmentHoursNestedInput = {
    create?: XOR<DoctorAvailabilityCreateWithoutAppointmentHoursInput, DoctorAvailabilityUncheckedCreateWithoutAppointmentHoursInput>
    connectOrCreate?: DoctorAvailabilityCreateOrConnectWithoutAppointmentHoursInput
    upsert?: DoctorAvailabilityUpsertWithoutAppointmentHoursInput
    connect?: DoctorAvailabilityWhereUniqueInput
    update?: XOR<XOR<DoctorAvailabilityUpdateToOneWithWhereWithoutAppointmentHoursInput, DoctorAvailabilityUpdateWithoutAppointmentHoursInput>, DoctorAvailabilityUncheckedUpdateWithoutAppointmentHoursInput>
  }

  export type UserCreateNestedOneWithoutWeeklySchedulesInput = {
    create?: XOR<UserCreateWithoutWeeklySchedulesInput, UserUncheckedCreateWithoutWeeklySchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklySchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type WeeklyTimeSlotCreateNestedManyWithoutTemplateInput = {
    create?: XOR<WeeklyTimeSlotCreateWithoutTemplateInput, WeeklyTimeSlotUncheckedCreateWithoutTemplateInput> | WeeklyTimeSlotCreateWithoutTemplateInput[] | WeeklyTimeSlotUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: WeeklyTimeSlotCreateOrConnectWithoutTemplateInput | WeeklyTimeSlotCreateOrConnectWithoutTemplateInput[]
    createMany?: WeeklyTimeSlotCreateManyTemplateInputEnvelope
    connect?: WeeklyTimeSlotWhereUniqueInput | WeeklyTimeSlotWhereUniqueInput[]
  }

  export type WeeklyTimeSlotUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<WeeklyTimeSlotCreateWithoutTemplateInput, WeeklyTimeSlotUncheckedCreateWithoutTemplateInput> | WeeklyTimeSlotCreateWithoutTemplateInput[] | WeeklyTimeSlotUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: WeeklyTimeSlotCreateOrConnectWithoutTemplateInput | WeeklyTimeSlotCreateOrConnectWithoutTemplateInput[]
    createMany?: WeeklyTimeSlotCreateManyTemplateInputEnvelope
    connect?: WeeklyTimeSlotWhereUniqueInput | WeeklyTimeSlotWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutWeeklySchedulesNestedInput = {
    create?: XOR<UserCreateWithoutWeeklySchedulesInput, UserUncheckedCreateWithoutWeeklySchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklySchedulesInput
    upsert?: UserUpsertWithoutWeeklySchedulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeeklySchedulesInput, UserUpdateWithoutWeeklySchedulesInput>, UserUncheckedUpdateWithoutWeeklySchedulesInput>
  }

  export type WeeklyTimeSlotUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<WeeklyTimeSlotCreateWithoutTemplateInput, WeeklyTimeSlotUncheckedCreateWithoutTemplateInput> | WeeklyTimeSlotCreateWithoutTemplateInput[] | WeeklyTimeSlotUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: WeeklyTimeSlotCreateOrConnectWithoutTemplateInput | WeeklyTimeSlotCreateOrConnectWithoutTemplateInput[]
    upsert?: WeeklyTimeSlotUpsertWithWhereUniqueWithoutTemplateInput | WeeklyTimeSlotUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: WeeklyTimeSlotCreateManyTemplateInputEnvelope
    set?: WeeklyTimeSlotWhereUniqueInput | WeeklyTimeSlotWhereUniqueInput[]
    disconnect?: WeeklyTimeSlotWhereUniqueInput | WeeklyTimeSlotWhereUniqueInput[]
    delete?: WeeklyTimeSlotWhereUniqueInput | WeeklyTimeSlotWhereUniqueInput[]
    connect?: WeeklyTimeSlotWhereUniqueInput | WeeklyTimeSlotWhereUniqueInput[]
    update?: WeeklyTimeSlotUpdateWithWhereUniqueWithoutTemplateInput | WeeklyTimeSlotUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: WeeklyTimeSlotUpdateManyWithWhereWithoutTemplateInput | WeeklyTimeSlotUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: WeeklyTimeSlotScalarWhereInput | WeeklyTimeSlotScalarWhereInput[]
  }

  export type WeeklyTimeSlotUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<WeeklyTimeSlotCreateWithoutTemplateInput, WeeklyTimeSlotUncheckedCreateWithoutTemplateInput> | WeeklyTimeSlotCreateWithoutTemplateInput[] | WeeklyTimeSlotUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: WeeklyTimeSlotCreateOrConnectWithoutTemplateInput | WeeklyTimeSlotCreateOrConnectWithoutTemplateInput[]
    upsert?: WeeklyTimeSlotUpsertWithWhereUniqueWithoutTemplateInput | WeeklyTimeSlotUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: WeeklyTimeSlotCreateManyTemplateInputEnvelope
    set?: WeeklyTimeSlotWhereUniqueInput | WeeklyTimeSlotWhereUniqueInput[]
    disconnect?: WeeklyTimeSlotWhereUniqueInput | WeeklyTimeSlotWhereUniqueInput[]
    delete?: WeeklyTimeSlotWhereUniqueInput | WeeklyTimeSlotWhereUniqueInput[]
    connect?: WeeklyTimeSlotWhereUniqueInput | WeeklyTimeSlotWhereUniqueInput[]
    update?: WeeklyTimeSlotUpdateWithWhereUniqueWithoutTemplateInput | WeeklyTimeSlotUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: WeeklyTimeSlotUpdateManyWithWhereWithoutTemplateInput | WeeklyTimeSlotUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: WeeklyTimeSlotScalarWhereInput | WeeklyTimeSlotScalarWhereInput[]
  }

  export type WeeklyScheduleTemplateCreateNestedOneWithoutTimeSlotsInput = {
    create?: XOR<WeeklyScheduleTemplateCreateWithoutTimeSlotsInput, WeeklyScheduleTemplateUncheckedCreateWithoutTimeSlotsInput>
    connectOrCreate?: WeeklyScheduleTemplateCreateOrConnectWithoutTimeSlotsInput
    connect?: WeeklyScheduleTemplateWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutTimeSlotInput = {
    create?: XOR<AppointmentCreateWithoutTimeSlotInput, AppointmentUncheckedCreateWithoutTimeSlotInput> | AppointmentCreateWithoutTimeSlotInput[] | AppointmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTimeSlotInput | AppointmentCreateOrConnectWithoutTimeSlotInput[]
    createMany?: AppointmentCreateManyTimeSlotInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutTimeSlotInput = {
    create?: XOR<AppointmentCreateWithoutTimeSlotInput, AppointmentUncheckedCreateWithoutTimeSlotInput> | AppointmentCreateWithoutTimeSlotInput[] | AppointmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTimeSlotInput | AppointmentCreateOrConnectWithoutTimeSlotInput[]
    createMany?: AppointmentCreateManyTimeSlotInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type WeeklyScheduleTemplateUpdateOneRequiredWithoutTimeSlotsNestedInput = {
    create?: XOR<WeeklyScheduleTemplateCreateWithoutTimeSlotsInput, WeeklyScheduleTemplateUncheckedCreateWithoutTimeSlotsInput>
    connectOrCreate?: WeeklyScheduleTemplateCreateOrConnectWithoutTimeSlotsInput
    upsert?: WeeklyScheduleTemplateUpsertWithoutTimeSlotsInput
    connect?: WeeklyScheduleTemplateWhereUniqueInput
    update?: XOR<XOR<WeeklyScheduleTemplateUpdateToOneWithWhereWithoutTimeSlotsInput, WeeklyScheduleTemplateUpdateWithoutTimeSlotsInput>, WeeklyScheduleTemplateUncheckedUpdateWithoutTimeSlotsInput>
  }

  export type AppointmentUpdateManyWithoutTimeSlotNestedInput = {
    create?: XOR<AppointmentCreateWithoutTimeSlotInput, AppointmentUncheckedCreateWithoutTimeSlotInput> | AppointmentCreateWithoutTimeSlotInput[] | AppointmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTimeSlotInput | AppointmentCreateOrConnectWithoutTimeSlotInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutTimeSlotInput | AppointmentUpsertWithWhereUniqueWithoutTimeSlotInput[]
    createMany?: AppointmentCreateManyTimeSlotInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutTimeSlotInput | AppointmentUpdateWithWhereUniqueWithoutTimeSlotInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutTimeSlotInput | AppointmentUpdateManyWithWhereWithoutTimeSlotInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutTimeSlotNestedInput = {
    create?: XOR<AppointmentCreateWithoutTimeSlotInput, AppointmentUncheckedCreateWithoutTimeSlotInput> | AppointmentCreateWithoutTimeSlotInput[] | AppointmentUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutTimeSlotInput | AppointmentCreateOrConnectWithoutTimeSlotInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutTimeSlotInput | AppointmentUpsertWithWhereUniqueWithoutTimeSlotInput[]
    createMany?: AppointmentCreateManyTimeSlotInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutTimeSlotInput | AppointmentUpdateWithWhereUniqueWithoutTimeSlotInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutTimeSlotInput | AppointmentUpdateManyWithWhereWithoutTimeSlotInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentCreateNestedOneWithoutPrescriptionInput = {
    create?: XOR<AppointmentCreateWithoutPrescriptionInput, AppointmentUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPrescriptionInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPrescriptionsAsDoctorInput = {
    create?: XOR<UserCreateWithoutPrescriptionsAsDoctorInput, UserUncheckedCreateWithoutPrescriptionsAsDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrescriptionsAsDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPrescriptionsAsPatientInput = {
    create?: XOR<UserCreateWithoutPrescriptionsAsPatientInput, UserUncheckedCreateWithoutPrescriptionsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrescriptionsAsPatientInput
    connect?: UserWhereUniqueInput
  }

  export type PrescriptionMedicationCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<PrescriptionMedicationCreateWithoutPrescriptionInput, PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput> | PrescriptionMedicationCreateWithoutPrescriptionInput[] | PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionMedicationCreateOrConnectWithoutPrescriptionInput | PrescriptionMedicationCreateOrConnectWithoutPrescriptionInput[]
    createMany?: PrescriptionMedicationCreateManyPrescriptionInputEnvelope
    connect?: PrescriptionMedicationWhereUniqueInput | PrescriptionMedicationWhereUniqueInput[]
  }

  export type PrescriptionMedicationUncheckedCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<PrescriptionMedicationCreateWithoutPrescriptionInput, PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput> | PrescriptionMedicationCreateWithoutPrescriptionInput[] | PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionMedicationCreateOrConnectWithoutPrescriptionInput | PrescriptionMedicationCreateOrConnectWithoutPrescriptionInput[]
    createMany?: PrescriptionMedicationCreateManyPrescriptionInputEnvelope
    connect?: PrescriptionMedicationWhereUniqueInput | PrescriptionMedicationWhereUniqueInput[]
  }

  export type AppointmentUpdateOneRequiredWithoutPrescriptionNestedInput = {
    create?: XOR<AppointmentCreateWithoutPrescriptionInput, AppointmentUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPrescriptionInput
    upsert?: AppointmentUpsertWithoutPrescriptionInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutPrescriptionInput, AppointmentUpdateWithoutPrescriptionInput>, AppointmentUncheckedUpdateWithoutPrescriptionInput>
  }

  export type UserUpdateOneRequiredWithoutPrescriptionsAsDoctorNestedInput = {
    create?: XOR<UserCreateWithoutPrescriptionsAsDoctorInput, UserUncheckedCreateWithoutPrescriptionsAsDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrescriptionsAsDoctorInput
    upsert?: UserUpsertWithoutPrescriptionsAsDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrescriptionsAsDoctorInput, UserUpdateWithoutPrescriptionsAsDoctorInput>, UserUncheckedUpdateWithoutPrescriptionsAsDoctorInput>
  }

  export type UserUpdateOneRequiredWithoutPrescriptionsAsPatientNestedInput = {
    create?: XOR<UserCreateWithoutPrescriptionsAsPatientInput, UserUncheckedCreateWithoutPrescriptionsAsPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrescriptionsAsPatientInput
    upsert?: UserUpsertWithoutPrescriptionsAsPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrescriptionsAsPatientInput, UserUpdateWithoutPrescriptionsAsPatientInput>, UserUncheckedUpdateWithoutPrescriptionsAsPatientInput>
  }

  export type PrescriptionMedicationUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<PrescriptionMedicationCreateWithoutPrescriptionInput, PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput> | PrescriptionMedicationCreateWithoutPrescriptionInput[] | PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionMedicationCreateOrConnectWithoutPrescriptionInput | PrescriptionMedicationCreateOrConnectWithoutPrescriptionInput[]
    upsert?: PrescriptionMedicationUpsertWithWhereUniqueWithoutPrescriptionInput | PrescriptionMedicationUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: PrescriptionMedicationCreateManyPrescriptionInputEnvelope
    set?: PrescriptionMedicationWhereUniqueInput | PrescriptionMedicationWhereUniqueInput[]
    disconnect?: PrescriptionMedicationWhereUniqueInput | PrescriptionMedicationWhereUniqueInput[]
    delete?: PrescriptionMedicationWhereUniqueInput | PrescriptionMedicationWhereUniqueInput[]
    connect?: PrescriptionMedicationWhereUniqueInput | PrescriptionMedicationWhereUniqueInput[]
    update?: PrescriptionMedicationUpdateWithWhereUniqueWithoutPrescriptionInput | PrescriptionMedicationUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: PrescriptionMedicationUpdateManyWithWhereWithoutPrescriptionInput | PrescriptionMedicationUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: PrescriptionMedicationScalarWhereInput | PrescriptionMedicationScalarWhereInput[]
  }

  export type PrescriptionMedicationUncheckedUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<PrescriptionMedicationCreateWithoutPrescriptionInput, PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput> | PrescriptionMedicationCreateWithoutPrescriptionInput[] | PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionMedicationCreateOrConnectWithoutPrescriptionInput | PrescriptionMedicationCreateOrConnectWithoutPrescriptionInput[]
    upsert?: PrescriptionMedicationUpsertWithWhereUniqueWithoutPrescriptionInput | PrescriptionMedicationUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: PrescriptionMedicationCreateManyPrescriptionInputEnvelope
    set?: PrescriptionMedicationWhereUniqueInput | PrescriptionMedicationWhereUniqueInput[]
    disconnect?: PrescriptionMedicationWhereUniqueInput | PrescriptionMedicationWhereUniqueInput[]
    delete?: PrescriptionMedicationWhereUniqueInput | PrescriptionMedicationWhereUniqueInput[]
    connect?: PrescriptionMedicationWhereUniqueInput | PrescriptionMedicationWhereUniqueInput[]
    update?: PrescriptionMedicationUpdateWithWhereUniqueWithoutPrescriptionInput | PrescriptionMedicationUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: PrescriptionMedicationUpdateManyWithWhereWithoutPrescriptionInput | PrescriptionMedicationUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: PrescriptionMedicationScalarWhereInput | PrescriptionMedicationScalarWhereInput[]
  }

  export type PrescriptionCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<PrescriptionCreateWithoutMedicationsInput, PrescriptionUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicationsInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type PrescriptionUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<PrescriptionCreateWithoutMedicationsInput, PrescriptionUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicationsInput
    upsert?: PrescriptionUpsertWithoutMedicationsInput
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutMedicationsInput, PrescriptionUpdateWithoutMedicationsInput>, PrescriptionUncheckedUpdateWithoutMedicationsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumMedicalSpecialtyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicalSpecialty | EnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    in?: $Enums.MedicalSpecialty[] | ListEnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MedicalSpecialty[] | ListEnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMedicalSpecialtyNullableFilter<$PrismaModel> | $Enums.MedicalSpecialty | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumMedicalSpecialtyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicalSpecialty | EnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    in?: $Enums.MedicalSpecialty[] | ListEnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MedicalSpecialty[] | ListEnumMedicalSpecialtyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMedicalSpecialtyNullableWithAggregatesFilter<$PrismaModel> | $Enums.MedicalSpecialty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMedicalSpecialtyNullableFilter<$PrismaModel>
    _max?: NestedEnumMedicalSpecialtyNullableFilter<$PrismaModel>
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

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
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

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type WeeklyScheduleTemplateCreateWithoutDoctorInput = {
    name: string
    isActive?: boolean
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSlots?: WeeklyTimeSlotCreateNestedManyWithoutTemplateInput
  }

  export type WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput = {
    id?: number
    name: string
    isActive?: boolean
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSlots?: WeeklyTimeSlotUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type WeeklyScheduleTemplateCreateOrConnectWithoutDoctorInput = {
    where: WeeklyScheduleTemplateWhereUniqueInput
    create: XOR<WeeklyScheduleTemplateCreateWithoutDoctorInput, WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput>
  }

  export type WeeklyScheduleTemplateCreateManyDoctorInputEnvelope = {
    data: WeeklyScheduleTemplateCreateManyDoctorInput | WeeklyScheduleTemplateCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutPatientInput = {
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorAppointmentsInput
    timeSlot?: WeeklyTimeSlotCreateNestedOneWithoutAppointmentsInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
    timeSlotId?: number | null
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutDoctorInput = {
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: UserCreateNestedOneWithoutPatientAppointmentsInput
    timeSlot?: WeeklyTimeSlotCreateNestedOneWithoutAppointmentsInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: number
    timeSlotId?: number | null
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorAvailabilityCreateWithoutDoctorInput = {
    date: Date | string
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentHours?: AppointmentHoursCreateNestedManyWithoutDoctorAvailabilityInput
  }

  export type DoctorAvailabilityUncheckedCreateWithoutDoctorInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentHours?: AppointmentHoursUncheckedCreateNestedManyWithoutDoctorAvailabilityInput
  }

  export type DoctorAvailabilityCreateOrConnectWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    create: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorAvailabilityCreateManyDoctorInputEnvelope = {
    data: DoctorAvailabilityCreateManyDoctorInput | DoctorAvailabilityCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutDoctorInput = {
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutPrescriptionInput
    patient: UserCreateNestedOneWithoutPrescriptionsAsPatientInput
    medications?: PrescriptionMedicationCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutDoctorInput = {
    id?: number
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentId: number
    patientId: number
    medications?: PrescriptionMedicationUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionCreateManyDoctorInputEnvelope = {
    data: PrescriptionCreateManyDoctorInput | PrescriptionCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutPatientInput = {
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutPrescriptionInput
    doctor: UserCreateNestedOneWithoutPrescriptionsAsDoctorInput
    medications?: PrescriptionMedicationCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutPatientInput = {
    id?: number
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentId: number
    doctorId: number
    medications?: PrescriptionMedicationUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionCreateManyPatientInputEnvelope = {
    data: PrescriptionCreateManyPatientInput | PrescriptionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyScheduleTemplateUpsertWithWhereUniqueWithoutDoctorInput = {
    where: WeeklyScheduleTemplateWhereUniqueInput
    update: XOR<WeeklyScheduleTemplateUpdateWithoutDoctorInput, WeeklyScheduleTemplateUncheckedUpdateWithoutDoctorInput>
    create: XOR<WeeklyScheduleTemplateCreateWithoutDoctorInput, WeeklyScheduleTemplateUncheckedCreateWithoutDoctorInput>
  }

  export type WeeklyScheduleTemplateUpdateWithWhereUniqueWithoutDoctorInput = {
    where: WeeklyScheduleTemplateWhereUniqueInput
    data: XOR<WeeklyScheduleTemplateUpdateWithoutDoctorInput, WeeklyScheduleTemplateUncheckedUpdateWithoutDoctorInput>
  }

  export type WeeklyScheduleTemplateUpdateManyWithWhereWithoutDoctorInput = {
    where: WeeklyScheduleTemplateScalarWhereInput
    data: XOR<WeeklyScheduleTemplateUpdateManyMutationInput, WeeklyScheduleTemplateUncheckedUpdateManyWithoutDoctorInput>
  }

  export type WeeklyScheduleTemplateScalarWhereInput = {
    AND?: WeeklyScheduleTemplateScalarWhereInput | WeeklyScheduleTemplateScalarWhereInput[]
    OR?: WeeklyScheduleTemplateScalarWhereInput[]
    NOT?: WeeklyScheduleTemplateScalarWhereInput | WeeklyScheduleTemplateScalarWhereInput[]
    id?: IntFilter<"WeeklyScheduleTemplate"> | number
    name?: StringFilter<"WeeklyScheduleTemplate"> | string
    isActive?: BoolFilter<"WeeklyScheduleTemplate"> | boolean
    effectiveFrom?: DateTimeFilter<"WeeklyScheduleTemplate"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"WeeklyScheduleTemplate"> | Date | string | null
    createdAt?: DateTimeFilter<"WeeklyScheduleTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyScheduleTemplate"> | Date | string
    doctorId?: IntFilter<"WeeklyScheduleTemplate"> | number
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: StringFilter<"Appointment"> | string
    endTime?: StringFilter<"Appointment"> | string
    typemaladie?: StringFilter<"Appointment"> | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    timeSlotId?: IntNullableFilter<"Appointment"> | number | null
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorAvailabilityUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    update: XOR<DoctorAvailabilityUpdateWithoutDoctorInput, DoctorAvailabilityUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorAvailabilityCreateWithoutDoctorInput, DoctorAvailabilityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorAvailabilityUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorAvailabilityWhereUniqueInput
    data: XOR<DoctorAvailabilityUpdateWithoutDoctorInput, DoctorAvailabilityUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorAvailabilityUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorAvailabilityScalarWhereInput
    data: XOR<DoctorAvailabilityUpdateManyMutationInput, DoctorAvailabilityUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorAvailabilityScalarWhereInput = {
    AND?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
    OR?: DoctorAvailabilityScalarWhereInput[]
    NOT?: DoctorAvailabilityScalarWhereInput | DoctorAvailabilityScalarWhereInput[]
    id?: IntFilter<"DoctorAvailability"> | number
    date?: DateTimeFilter<"DoctorAvailability"> | Date | string
    startTime?: StringFilter<"DoctorAvailability"> | string
    endTime?: StringFilter<"DoctorAvailability"> | string
    isAvailable?: BoolFilter<"DoctorAvailability"> | boolean
    createdAt?: DateTimeFilter<"DoctorAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"DoctorAvailability"> | Date | string
    doctorId?: IntFilter<"DoctorAvailability"> | number
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutDoctorInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: IntFilter<"Prescription"> | number
    diagnosis?: StringFilter<"Prescription"> | string
    instructions?: StringNullableFilter<"Prescription"> | string | null
    validUntil?: DateTimeNullableFilter<"Prescription"> | Date | string | null
    isActive?: BoolFilter<"Prescription"> | boolean
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
    appointmentId?: IntFilter<"Prescription"> | number
    doctorId?: IntFilter<"Prescription"> | number
    patientId?: IntFilter<"Prescription"> | number
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPatientInput>
  }

  export type UserCreateWithoutDoctorAppointmentsInput = {
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
    doctorAvailabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutDoctorAppointmentsInput = {
    id?: number
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutDoctorAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorAppointmentsInput, UserUncheckedCreateWithoutDoctorAppointmentsInput>
  }

  export type UserCreateWithoutPatientAppointmentsInput = {
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    doctorAvailabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutPatientAppointmentsInput = {
    id?: number
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedCreateNestedManyWithoutDoctorInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutPatientAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientAppointmentsInput, UserUncheckedCreateWithoutPatientAppointmentsInput>
  }

  export type WeeklyTimeSlotCreateWithoutAppointmentsInput = {
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    template: WeeklyScheduleTemplateCreateNestedOneWithoutTimeSlotsInput
  }

  export type WeeklyTimeSlotUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    templateId: number
  }

  export type WeeklyTimeSlotCreateOrConnectWithoutAppointmentsInput = {
    where: WeeklyTimeSlotWhereUniqueInput
    create: XOR<WeeklyTimeSlotCreateWithoutAppointmentsInput, WeeklyTimeSlotUncheckedCreateWithoutAppointmentsInput>
  }

  export type PrescriptionCreateWithoutAppointmentInput = {
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutPrescriptionsAsDoctorInput
    patient: UserCreateNestedOneWithoutPrescriptionsAsPatientInput
    medications?: PrescriptionMedicationCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutAppointmentInput = {
    id?: number
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
    patientId: number
    medications?: PrescriptionMedicationUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutAppointmentInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
  }

  export type UserUpsertWithoutDoctorAppointmentsInput = {
    update: XOR<UserUpdateWithoutDoctorAppointmentsInput, UserUncheckedUpdateWithoutDoctorAppointmentsInput>
    create: XOR<UserCreateWithoutDoctorAppointmentsInput, UserUncheckedCreateWithoutDoctorAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorAppointmentsInput, UserUncheckedUpdateWithoutDoctorAppointmentsInput>
  }

  export type UserUpdateWithoutDoctorAppointmentsInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
    doctorAvailabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutPatientAppointmentsInput = {
    update: XOR<UserUpdateWithoutPatientAppointmentsInput, UserUncheckedUpdateWithoutPatientAppointmentsInput>
    create: XOR<UserCreateWithoutPatientAppointmentsInput, UserUncheckedCreateWithoutPatientAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientAppointmentsInput, UserUncheckedUpdateWithoutPatientAppointmentsInput>
  }

  export type UserUpdateWithoutPatientAppointmentsInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    doctorAvailabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type WeeklyTimeSlotUpsertWithoutAppointmentsInput = {
    update: XOR<WeeklyTimeSlotUpdateWithoutAppointmentsInput, WeeklyTimeSlotUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<WeeklyTimeSlotCreateWithoutAppointmentsInput, WeeklyTimeSlotUncheckedCreateWithoutAppointmentsInput>
    where?: WeeklyTimeSlotWhereInput
  }

  export type WeeklyTimeSlotUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: WeeklyTimeSlotWhereInput
    data: XOR<WeeklyTimeSlotUpdateWithoutAppointmentsInput, WeeklyTimeSlotUncheckedUpdateWithoutAppointmentsInput>
  }

  export type WeeklyTimeSlotUpdateWithoutAppointmentsInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: WeeklyScheduleTemplateUpdateOneRequiredWithoutTimeSlotsNestedInput
  }

  export type WeeklyTimeSlotUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionUpsertWithoutAppointmentInput = {
    update: XOR<PrescriptionUpdateWithoutAppointmentInput, PrescriptionUncheckedUpdateWithoutAppointmentInput>
    create: XOR<PrescriptionCreateWithoutAppointmentInput, PrescriptionUncheckedCreateWithoutAppointmentInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutAppointmentInput, PrescriptionUncheckedUpdateWithoutAppointmentInput>
  }

  export type PrescriptionUpdateWithoutAppointmentInput = {
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsAsDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutPrescriptionsAsPatientNestedInput
    medications?: PrescriptionMedicationUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medications?: PrescriptionMedicationUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type UserCreateWithoutDoctorAvailabilitiesInput = {
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutDoctorAvailabilitiesInput = {
    id?: number
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutDoctorAvailabilitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorAvailabilitiesInput, UserUncheckedCreateWithoutDoctorAvailabilitiesInput>
  }

  export type AppointmentHoursCreateWithoutDoctorAvailabilityInput = {
    date: string
    hour: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput = {
    id?: number
    date: string
    hour: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentHoursCreateOrConnectWithoutDoctorAvailabilityInput = {
    where: AppointmentHoursWhereUniqueInput
    create: XOR<AppointmentHoursCreateWithoutDoctorAvailabilityInput, AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput>
  }

  export type AppointmentHoursCreateManyDoctorAvailabilityInputEnvelope = {
    data: AppointmentHoursCreateManyDoctorAvailabilityInput | AppointmentHoursCreateManyDoctorAvailabilityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorAvailabilitiesInput = {
    update: XOR<UserUpdateWithoutDoctorAvailabilitiesInput, UserUncheckedUpdateWithoutDoctorAvailabilitiesInput>
    create: XOR<UserCreateWithoutDoctorAvailabilitiesInput, UserUncheckedCreateWithoutDoctorAvailabilitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorAvailabilitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorAvailabilitiesInput, UserUncheckedUpdateWithoutDoctorAvailabilitiesInput>
  }

  export type UserUpdateWithoutDoctorAvailabilitiesInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type AppointmentHoursUpsertWithWhereUniqueWithoutDoctorAvailabilityInput = {
    where: AppointmentHoursWhereUniqueInput
    update: XOR<AppointmentHoursUpdateWithoutDoctorAvailabilityInput, AppointmentHoursUncheckedUpdateWithoutDoctorAvailabilityInput>
    create: XOR<AppointmentHoursCreateWithoutDoctorAvailabilityInput, AppointmentHoursUncheckedCreateWithoutDoctorAvailabilityInput>
  }

  export type AppointmentHoursUpdateWithWhereUniqueWithoutDoctorAvailabilityInput = {
    where: AppointmentHoursWhereUniqueInput
    data: XOR<AppointmentHoursUpdateWithoutDoctorAvailabilityInput, AppointmentHoursUncheckedUpdateWithoutDoctorAvailabilityInput>
  }

  export type AppointmentHoursUpdateManyWithWhereWithoutDoctorAvailabilityInput = {
    where: AppointmentHoursScalarWhereInput
    data: XOR<AppointmentHoursUpdateManyMutationInput, AppointmentHoursUncheckedUpdateManyWithoutDoctorAvailabilityInput>
  }

  export type AppointmentHoursScalarWhereInput = {
    AND?: AppointmentHoursScalarWhereInput | AppointmentHoursScalarWhereInput[]
    OR?: AppointmentHoursScalarWhereInput[]
    NOT?: AppointmentHoursScalarWhereInput | AppointmentHoursScalarWhereInput[]
    id?: IntFilter<"AppointmentHours"> | number
    date?: StringFilter<"AppointmentHours"> | string
    hour?: StringFilter<"AppointmentHours"> | string
    isAvailable?: BoolFilter<"AppointmentHours"> | boolean
    createdAt?: DateTimeFilter<"AppointmentHours"> | Date | string
    updatedAt?: DateTimeFilter<"AppointmentHours"> | Date | string
    doctorAvailabilityId?: IntFilter<"AppointmentHours"> | number
  }

  export type DoctorAvailabilityCreateWithoutAppointmentHoursInput = {
    date: Date | string
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorAvailabilitiesInput
  }

  export type DoctorAvailabilityUncheckedCreateWithoutAppointmentHoursInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
  }

  export type DoctorAvailabilityCreateOrConnectWithoutAppointmentHoursInput = {
    where: DoctorAvailabilityWhereUniqueInput
    create: XOR<DoctorAvailabilityCreateWithoutAppointmentHoursInput, DoctorAvailabilityUncheckedCreateWithoutAppointmentHoursInput>
  }

  export type DoctorAvailabilityUpsertWithoutAppointmentHoursInput = {
    update: XOR<DoctorAvailabilityUpdateWithoutAppointmentHoursInput, DoctorAvailabilityUncheckedUpdateWithoutAppointmentHoursInput>
    create: XOR<DoctorAvailabilityCreateWithoutAppointmentHoursInput, DoctorAvailabilityUncheckedCreateWithoutAppointmentHoursInput>
    where?: DoctorAvailabilityWhereInput
  }

  export type DoctorAvailabilityUpdateToOneWithWhereWithoutAppointmentHoursInput = {
    where?: DoctorAvailabilityWhereInput
    data: XOR<DoctorAvailabilityUpdateWithoutAppointmentHoursInput, DoctorAvailabilityUncheckedUpdateWithoutAppointmentHoursInput>
  }

  export type DoctorAvailabilityUpdateWithoutAppointmentHoursInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorAvailabilitiesNestedInput
  }

  export type DoctorAvailabilityUncheckedUpdateWithoutAppointmentHoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutWeeklySchedulesInput = {
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    doctorAvailabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutWeeklySchedulesInput = {
    id?: number
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutWeeklySchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeeklySchedulesInput, UserUncheckedCreateWithoutWeeklySchedulesInput>
  }

  export type WeeklyTimeSlotCreateWithoutTemplateInput = {
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutTimeSlotInput
  }

  export type WeeklyTimeSlotUncheckedCreateWithoutTemplateInput = {
    id?: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutTimeSlotInput
  }

  export type WeeklyTimeSlotCreateOrConnectWithoutTemplateInput = {
    where: WeeklyTimeSlotWhereUniqueInput
    create: XOR<WeeklyTimeSlotCreateWithoutTemplateInput, WeeklyTimeSlotUncheckedCreateWithoutTemplateInput>
  }

  export type WeeklyTimeSlotCreateManyTemplateInputEnvelope = {
    data: WeeklyTimeSlotCreateManyTemplateInput | WeeklyTimeSlotCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWeeklySchedulesInput = {
    update: XOR<UserUpdateWithoutWeeklySchedulesInput, UserUncheckedUpdateWithoutWeeklySchedulesInput>
    create: XOR<UserCreateWithoutWeeklySchedulesInput, UserUncheckedCreateWithoutWeeklySchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeeklySchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeeklySchedulesInput, UserUncheckedUpdateWithoutWeeklySchedulesInput>
  }

  export type UserUpdateWithoutWeeklySchedulesInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    doctorAvailabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutWeeklySchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type WeeklyTimeSlotUpsertWithWhereUniqueWithoutTemplateInput = {
    where: WeeklyTimeSlotWhereUniqueInput
    update: XOR<WeeklyTimeSlotUpdateWithoutTemplateInput, WeeklyTimeSlotUncheckedUpdateWithoutTemplateInput>
    create: XOR<WeeklyTimeSlotCreateWithoutTemplateInput, WeeklyTimeSlotUncheckedCreateWithoutTemplateInput>
  }

  export type WeeklyTimeSlotUpdateWithWhereUniqueWithoutTemplateInput = {
    where: WeeklyTimeSlotWhereUniqueInput
    data: XOR<WeeklyTimeSlotUpdateWithoutTemplateInput, WeeklyTimeSlotUncheckedUpdateWithoutTemplateInput>
  }

  export type WeeklyTimeSlotUpdateManyWithWhereWithoutTemplateInput = {
    where: WeeklyTimeSlotScalarWhereInput
    data: XOR<WeeklyTimeSlotUpdateManyMutationInput, WeeklyTimeSlotUncheckedUpdateManyWithoutTemplateInput>
  }

  export type WeeklyTimeSlotScalarWhereInput = {
    AND?: WeeklyTimeSlotScalarWhereInput | WeeklyTimeSlotScalarWhereInput[]
    OR?: WeeklyTimeSlotScalarWhereInput[]
    NOT?: WeeklyTimeSlotScalarWhereInput | WeeklyTimeSlotScalarWhereInput[]
    id?: IntFilter<"WeeklyTimeSlot"> | number
    dayOfWeek?: EnumDayOfWeekFilter<"WeeklyTimeSlot"> | $Enums.DayOfWeek
    startTime?: StringFilter<"WeeklyTimeSlot"> | string
    endTime?: StringFilter<"WeeklyTimeSlot"> | string
    isActive?: BoolFilter<"WeeklyTimeSlot"> | boolean
    createdAt?: DateTimeFilter<"WeeklyTimeSlot"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyTimeSlot"> | Date | string
    templateId?: IntFilter<"WeeklyTimeSlot"> | number
  }

  export type WeeklyScheduleTemplateCreateWithoutTimeSlotsInput = {
    name: string
    isActive?: boolean
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutWeeklySchedulesInput
  }

  export type WeeklyScheduleTemplateUncheckedCreateWithoutTimeSlotsInput = {
    id?: number
    name: string
    isActive?: boolean
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
  }

  export type WeeklyScheduleTemplateCreateOrConnectWithoutTimeSlotsInput = {
    where: WeeklyScheduleTemplateWhereUniqueInput
    create: XOR<WeeklyScheduleTemplateCreateWithoutTimeSlotsInput, WeeklyScheduleTemplateUncheckedCreateWithoutTimeSlotsInput>
  }

  export type AppointmentCreateWithoutTimeSlotInput = {
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorAppointmentsInput
    patient: UserCreateNestedOneWithoutPatientAppointmentsInput
    prescription?: PrescriptionCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutTimeSlotInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
    patientId: number
    prescription?: PrescriptionUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutTimeSlotInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutTimeSlotInput, AppointmentUncheckedCreateWithoutTimeSlotInput>
  }

  export type AppointmentCreateManyTimeSlotInputEnvelope = {
    data: AppointmentCreateManyTimeSlotInput | AppointmentCreateManyTimeSlotInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyScheduleTemplateUpsertWithoutTimeSlotsInput = {
    update: XOR<WeeklyScheduleTemplateUpdateWithoutTimeSlotsInput, WeeklyScheduleTemplateUncheckedUpdateWithoutTimeSlotsInput>
    create: XOR<WeeklyScheduleTemplateCreateWithoutTimeSlotsInput, WeeklyScheduleTemplateUncheckedCreateWithoutTimeSlotsInput>
    where?: WeeklyScheduleTemplateWhereInput
  }

  export type WeeklyScheduleTemplateUpdateToOneWithWhereWithoutTimeSlotsInput = {
    where?: WeeklyScheduleTemplateWhereInput
    data: XOR<WeeklyScheduleTemplateUpdateWithoutTimeSlotsInput, WeeklyScheduleTemplateUncheckedUpdateWithoutTimeSlotsInput>
  }

  export type WeeklyScheduleTemplateUpdateWithoutTimeSlotsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutWeeklySchedulesNestedInput
  }

  export type WeeklyScheduleTemplateUncheckedUpdateWithoutTimeSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUpsertWithWhereUniqueWithoutTimeSlotInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutTimeSlotInput, AppointmentUncheckedUpdateWithoutTimeSlotInput>
    create: XOR<AppointmentCreateWithoutTimeSlotInput, AppointmentUncheckedCreateWithoutTimeSlotInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutTimeSlotInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutTimeSlotInput, AppointmentUncheckedUpdateWithoutTimeSlotInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutTimeSlotInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutTimeSlotInput>
  }

  export type AppointmentCreateWithoutPrescriptionInput = {
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: UserCreateNestedOneWithoutDoctorAppointmentsInput
    patient: UserCreateNestedOneWithoutPatientAppointmentsInput
    timeSlot?: WeeklyTimeSlotCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPrescriptionInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
    patientId: number
    timeSlotId?: number | null
  }

  export type AppointmentCreateOrConnectWithoutPrescriptionInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPrescriptionInput, AppointmentUncheckedCreateWithoutPrescriptionInput>
  }

  export type UserCreateWithoutPrescriptionsAsDoctorInput = {
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    doctorAvailabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutPrescriptionsAsDoctorInput = {
    id?: number
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsPatient?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutPrescriptionsAsDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrescriptionsAsDoctorInput, UserUncheckedCreateWithoutPrescriptionsAsDoctorInput>
  }

  export type UserCreateWithoutPrescriptionsAsPatientInput = {
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentCreateNestedManyWithoutPatientInput
    doctorAppointments?: AppointmentCreateNestedManyWithoutDoctorInput
    doctorAvailabilities?: DoctorAvailabilityCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type UserUncheckedCreateWithoutPrescriptionsAsPatientInput = {
    id?: number
    clerkId: string
    role?: $Enums.Role
    first_name: string
    last_name: string
    phone_number: string
    birth_date: Date | string
    gender: $Enums.Gender
    specialty?: $Enums.MedicalSpecialty | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedCreateNestedManyWithoutDoctorInput
    patientAppointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    doctorAppointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedCreateNestedManyWithoutDoctorInput
    prescriptionsAsDoctor?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type UserCreateOrConnectWithoutPrescriptionsAsPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrescriptionsAsPatientInput, UserUncheckedCreateWithoutPrescriptionsAsPatientInput>
  }

  export type PrescriptionMedicationCreateWithoutPrescriptionInput = {
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput = {
    id?: number
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionMedicationCreateOrConnectWithoutPrescriptionInput = {
    where: PrescriptionMedicationWhereUniqueInput
    create: XOR<PrescriptionMedicationCreateWithoutPrescriptionInput, PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionMedicationCreateManyPrescriptionInputEnvelope = {
    data: PrescriptionMedicationCreateManyPrescriptionInput | PrescriptionMedicationCreateManyPrescriptionInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithoutPrescriptionInput = {
    update: XOR<AppointmentUpdateWithoutPrescriptionInput, AppointmentUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<AppointmentCreateWithoutPrescriptionInput, AppointmentUncheckedCreateWithoutPrescriptionInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutPrescriptionInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutPrescriptionInput, AppointmentUncheckedUpdateWithoutPrescriptionInput>
  }

  export type AppointmentUpdateWithoutPrescriptionInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorAppointmentsNestedInput
    patient?: UserUpdateOneRequiredWithoutPatientAppointmentsNestedInput
    timeSlot?: WeeklyTimeSlotUpdateOneWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPrescriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    timeSlotId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutPrescriptionsAsDoctorInput = {
    update: XOR<UserUpdateWithoutPrescriptionsAsDoctorInput, UserUncheckedUpdateWithoutPrescriptionsAsDoctorInput>
    create: XOR<UserCreateWithoutPrescriptionsAsDoctorInput, UserUncheckedCreateWithoutPrescriptionsAsDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrescriptionsAsDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrescriptionsAsDoctorInput, UserUncheckedUpdateWithoutPrescriptionsAsDoctorInput>
  }

  export type UserUpdateWithoutPrescriptionsAsDoctorInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    doctorAvailabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutPrescriptionsAsDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsPatient?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutPrescriptionsAsPatientInput = {
    update: XOR<UserUpdateWithoutPrescriptionsAsPatientInput, UserUncheckedUpdateWithoutPrescriptionsAsPatientInput>
    create: XOR<UserCreateWithoutPrescriptionsAsPatientInput, UserUncheckedCreateWithoutPrescriptionsAsPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrescriptionsAsPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrescriptionsAsPatientInput, UserUncheckedUpdateWithoutPrescriptionsAsPatientInput>
  }

  export type UserUpdateWithoutPrescriptionsAsPatientInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUpdateManyWithoutPatientNestedInput
    doctorAppointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    doctorAvailabilities?: DoctorAvailabilityUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type UserUncheckedUpdateWithoutPrescriptionsAsPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    specialty?: NullableEnumMedicalSpecialtyFieldUpdateOperationsInput | $Enums.MedicalSpecialty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklySchedules?: WeeklyScheduleTemplateUncheckedUpdateManyWithoutDoctorNestedInput
    patientAppointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    doctorAppointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    doctorAvailabilities?: DoctorAvailabilityUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptionsAsDoctor?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PrescriptionMedicationUpsertWithWhereUniqueWithoutPrescriptionInput = {
    where: PrescriptionMedicationWhereUniqueInput
    update: XOR<PrescriptionMedicationUpdateWithoutPrescriptionInput, PrescriptionMedicationUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<PrescriptionMedicationCreateWithoutPrescriptionInput, PrescriptionMedicationUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionMedicationUpdateWithWhereUniqueWithoutPrescriptionInput = {
    where: PrescriptionMedicationWhereUniqueInput
    data: XOR<PrescriptionMedicationUpdateWithoutPrescriptionInput, PrescriptionMedicationUncheckedUpdateWithoutPrescriptionInput>
  }

  export type PrescriptionMedicationUpdateManyWithWhereWithoutPrescriptionInput = {
    where: PrescriptionMedicationScalarWhereInput
    data: XOR<PrescriptionMedicationUpdateManyMutationInput, PrescriptionMedicationUncheckedUpdateManyWithoutPrescriptionInput>
  }

  export type PrescriptionMedicationScalarWhereInput = {
    AND?: PrescriptionMedicationScalarWhereInput | PrescriptionMedicationScalarWhereInput[]
    OR?: PrescriptionMedicationScalarWhereInput[]
    NOT?: PrescriptionMedicationScalarWhereInput | PrescriptionMedicationScalarWhereInput[]
    id?: IntFilter<"PrescriptionMedication"> | number
    medicationName?: StringFilter<"PrescriptionMedication"> | string
    dosage?: StringFilter<"PrescriptionMedication"> | string
    frequency?: StringFilter<"PrescriptionMedication"> | string
    duration?: StringFilter<"PrescriptionMedication"> | string
    instructions?: StringNullableFilter<"PrescriptionMedication"> | string | null
    createdAt?: DateTimeFilter<"PrescriptionMedication"> | Date | string
    updatedAt?: DateTimeFilter<"PrescriptionMedication"> | Date | string
    prescriptionId?: IntFilter<"PrescriptionMedication"> | number
  }

  export type PrescriptionCreateWithoutMedicationsInput = {
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutPrescriptionInput
    doctor: UserCreateNestedOneWithoutPrescriptionsAsDoctorInput
    patient: UserCreateNestedOneWithoutPrescriptionsAsPatientInput
  }

  export type PrescriptionUncheckedCreateWithoutMedicationsInput = {
    id?: number
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentId: number
    doctorId: number
    patientId: number
  }

  export type PrescriptionCreateOrConnectWithoutMedicationsInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutMedicationsInput, PrescriptionUncheckedCreateWithoutMedicationsInput>
  }

  export type PrescriptionUpsertWithoutMedicationsInput = {
    update: XOR<PrescriptionUpdateWithoutMedicationsInput, PrescriptionUncheckedUpdateWithoutMedicationsInput>
    create: XOR<PrescriptionCreateWithoutMedicationsInput, PrescriptionUncheckedCreateWithoutMedicationsInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutMedicationsInput, PrescriptionUncheckedUpdateWithoutMedicationsInput>
  }

  export type PrescriptionUpdateWithoutMedicationsInput = {
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutPrescriptionNestedInput
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsAsDoctorNestedInput
    patient?: UserUpdateOneRequiredWithoutPrescriptionsAsPatientNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutMedicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyScheduleTemplateCreateManyDoctorInput = {
    id?: number
    name: string
    isActive?: boolean
    effectiveFrom?: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateManyPatientInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
    timeSlotId?: number | null
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientId: number
    timeSlotId?: number | null
  }

  export type DoctorAvailabilityCreateManyDoctorInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateManyDoctorInput = {
    id?: number
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentId: number
    patientId: number
  }

  export type PrescriptionCreateManyPatientInput = {
    id?: number
    diagnosis: string
    instructions?: string | null
    validUntil?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentId: number
    doctorId: number
  }

  export type WeeklyScheduleTemplateUpdateWithoutDoctorInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlots?: WeeklyTimeSlotUpdateManyWithoutTemplateNestedInput
  }

  export type WeeklyScheduleTemplateUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlots?: WeeklyTimeSlotUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type WeeklyScheduleTemplateUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorAppointmentsNestedInput
    timeSlot?: WeeklyTimeSlotUpdateOneWithoutAppointmentsNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    timeSlotId?: NullableIntFieldUpdateOperationsInput | number | null
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    timeSlotId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutPatientAppointmentsNestedInput
    timeSlot?: WeeklyTimeSlotUpdateOneWithoutAppointmentsNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: IntFieldUpdateOperationsInput | number
    timeSlotId?: NullableIntFieldUpdateOperationsInput | number | null
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientId?: IntFieldUpdateOperationsInput | number
    timeSlotId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DoctorAvailabilityUpdateWithoutDoctorInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentHours?: AppointmentHoursUpdateManyWithoutDoctorAvailabilityNestedInput
  }

  export type DoctorAvailabilityUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentHours?: AppointmentHoursUncheckedUpdateManyWithoutDoctorAvailabilityNestedInput
  }

  export type DoctorAvailabilityUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutDoctorInput = {
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutPrescriptionNestedInput
    patient?: UserUpdateOneRequiredWithoutPrescriptionsAsPatientNestedInput
    medications?: PrescriptionMedicationUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medications?: PrescriptionMedicationUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionUpdateWithoutPatientInput = {
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutPrescriptionNestedInput
    doctor?: UserUpdateOneRequiredWithoutPrescriptionsAsDoctorNestedInput
    medications?: PrescriptionMedicationUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    medications?: PrescriptionMedicationUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentHoursCreateManyDoctorAvailabilityInput = {
    id?: number
    date: string
    hour: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentHoursUpdateWithoutDoctorAvailabilityInput = {
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentHoursUncheckedUpdateWithoutDoctorAvailabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentHoursUncheckedUpdateManyWithoutDoctorAvailabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyTimeSlotCreateManyTemplateInput = {
    id?: number
    dayOfWeek: $Enums.DayOfWeek
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklyTimeSlotUpdateWithoutTemplateInput = {
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutTimeSlotNestedInput
  }

  export type WeeklyTimeSlotUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutTimeSlotNestedInput
  }

  export type WeeklyTimeSlotUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyTimeSlotInput = {
    id?: number
    date: Date | string
    startTime: string
    endTime: string
    typemaladie: string
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorId: number
    patientId: number
  }

  export type AppointmentUpdateWithoutTimeSlotInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: UserUpdateOneRequiredWithoutDoctorAppointmentsNestedInput
    patient?: UserUpdateOneRequiredWithoutPatientAppointmentsNestedInput
    prescription?: PrescriptionUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutTimeSlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    prescription?: PrescriptionUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutTimeSlotInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    typemaladie?: StringFieldUpdateOperationsInput | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionMedicationCreateManyPrescriptionInput = {
    id?: number
    medicationName: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionMedicationUpdateWithoutPrescriptionInput = {
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionMedicationUncheckedUpdateWithoutPrescriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionMedicationUncheckedUpdateManyWithoutPrescriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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