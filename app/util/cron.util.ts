type DayOfMonth =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31';

type Hours =
  | '0'
  | '00'
  | '1'
  | '01'
  | '2'
  | '02'
  | '3'
  | '03'
  | '4'
  | '04'
  | '5'
  | '05'
  | '6'
  | '06'
  | '7'
  | '07'
  | '8'
  | '08'
  | '9'
  | '09'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23';

type Minutes =
  | '00'
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'
  | '32'
  | '33'
  | '34'
  | '35'
  | '36'
  | '37'
  | '38'
  | '39'
  | '40'
  | '41'
  | '42'
  | '43'
  | '44'
  | '45'
  | '46'
  | '47'
  | '48'
  | '49'
  | '50'
  | '51'
  | '52'
  | '53'
  | '54'
  | '55'
  | '56'
  | '57'
  | '58'
  | '59';

enum WeekDay {
  sunday = '0',
  monday = '1',
  tuesday = '2',
  wednesday = '3',
  thursday = '4',
  friday = '5',
  saturday = '6',
  sun = '0',
  mon = '1',
  tue = '2',
  wed = '3',
  thu = '4',
  fri = '5',
  sat = '6',
}
type DayOfWeek = '0' | '1' | '2' | '3' | '4' | '5' | '6';

enum Month {
  january = '1',
  february = '2',
  march = '3',
  april = '4',
  may = '5',
  june = '6',
  july = '7',
  august = '8',
  september = '9',
  october = '10',
  november = '11',
  december = '12',
  jan = '1',
  feb = '2',
  mar = '3',
  apr = '4',
  jun = '6',
  jul = '7',
  aug = '8',
  sep = '9',
  oct = '10',
  nov = '11',
  dec = '12',
}
type MonthNum = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

interface CronUtilInterface {
  /**
   * This converts from the local timezone to UTC
   * eg: America/New_York is UTC-5 so 5 hours will be subtracted from the expression
   */
  localTimezone: string;
}

class CronHelper implements CronUtilInterface {
  declare readonly localTimezone: string;

  constructor() {
    this.localTimezone = 'America/New_York';
  }

  everySecond = '* * * * * *';

  everyFifteenSeconds = '*/15 * * * * *';

  everyHour = '0 0 * * * *';

  /**
   * Runes every minute
   * A different number of minutes can be provided
   * @param {number} minutes - 5
   * @returns
   */
  everyMinute = async (minutes?: string): Promise<string> => {
    let expression = '0 * * * * *';
    if (minutes) expression = `0/${minutes} * * * * *`;
    return this._convertToUtc(expression);
  };

  /**
   * Runs once a day at midnight
   * A different time can be provided
   * @param {string} time - '21:15'
   * @returns
   */
  everyDay = async (time?: `${Hours}:${Minutes}`): Promise<string> => {
    let expression = '0 0 0 * * *';
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs every week (sunday) at midnight
   * A different time can be provided
   * @param {string} time - '21:15'
   * @returns
   */
  everySunday = async (time?: `${Hours}:${Minutes}`): Promise<string> => {
    let expression = '0 0 0 * * 0';
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs every Monday at midnight
   * A different time can be provided
   * @param {string} time - '21:15'
   * @returns
   */
  everyMonday = async (time?: `${Hours}:${Minutes}`): Promise<string> => {
    let expression = '0 0 0 * * 1';
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs every Tuesday at midnight
   * A different time can be provided
   * @param {string} time - '21:15'
   * @returns
   */
  everyTuesday = async (time?: `${Hours}:${Minutes}`): Promise<string> => {
    let expression = '0 0 0 * * 2';
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs every Wednesday at midnight
   * A different time can be provided
   * @param {string} time - '21:15'
   * @returns
   */
  everyWednesday = async (time?: `${Hours}:${Minutes}`): Promise<string> => {
    let expression = '0 0 0 * * 3';
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs every Thursday at midnight
   * A different time can be provided
   * @param {string} time - '21:15'
   * @returns
   */
  everyThursday = async (time?: `${Hours}:${Minutes}`): Promise<string> => {
    let expression = '0 0 0 * * 4';
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs every Friday at midnight
   * A different time can be provided
   * @param {string} time - '21:15'
   * @returns
   */
  everyFriday = async (time?: `${Hours}:${Minutes}`): Promise<string> => {
    let expression = '0 0 0 * * 5';
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs every Saturday at midnight
   * A different time can be provided
   * @param {string} time - '21:15'
   */
  everySaturday = async (time?: `${Hours}:${Minutes}`): Promise<string> => {
    let expression = '0 0 0 * * 6';
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs every weekday (Monday - Friday) at midnight
   * A different time can be provided
   * @param {string} time - '21:15'
   */
  everyWeekday = async (time?: `${Hours}:${Minutes}`): Promise<string> => {
    let expression = '0 0 0 * * 1-5';
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs once a month, starting on the first day of the month
   * A different time and day of the month can be provided
   * @param time - '21:15'
   * @param dayOfMonth - '21' (21st day of the month)
   */
  everyMonth = async ({ time, dayOfMonth }: { time?: `${Hours}:${Minutes}`; dayOfMonth?: DayOfMonth }): Promise<string> => {
    let expression = '0 0 0 1 * *';
    if (dayOfMonth) expression = this._handleDayOfMonth(expression, dayOfMonth); // eslint-disable-line
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  onMonths = async ({
    months,
    time,
    dayOfMonth,
  }: {
    months: (keyof typeof Month)[] | MonthNum[];
    time?: `${Hours}:${Minutes}`;
    dayOfMonth?: DayOfMonth;
  }): Promise<string> => {
    let expression = '0 0 0 1 * *';
    if (dayOfMonth) expression = this._handleDayOfMonth(expression, dayOfMonth); // eslint-disable-line
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    if (months) expression = this._handleMonths(expression, months); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs every 3 months, starting on the first day of the month
   * A different time and day of the month can be provided
   * @param {string} time - '21:15'
   * @param {string} dayOfMonth - '21' (21st day of the month)
   */
  everyQuarter = async ({ time, dayOfMonth }: { time?: `${Hours}:${Minutes}`; dayOfMonth?: DayOfMonth }): Promise<string> => {
    let expression = '0 0 0 * 1,4,7,10 *';
    if (dayOfMonth) expression = this._handleDayOfMonth(expression, dayOfMonth); // eslint-disable-line
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs every year on the first day of the year
   * A different time, month, and day of the month can be provided
   * @param {Object} time - '21:15'
   * @param {string} month - '04' (April) or 'apr' (April) or 'april' (April)
   * @param {string} day - '24' (24th day of the month)
   */
  everyYear = async ({ time, month, day }: { time?: `${Hours}:${Minutes}`; month?: Month | MonthNum; day?: DayOfMonth }): Promise<string> => {
    let expression = '0 0 0 1 1 *';
    if (month) expression = this._handleMonth(expression, month); // eslint-disable-line
    if (day) expression = this._handleDayOfMonth(expression, day); // eslint-disable-line
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  /**
   * Runs at the provided date and time
   * @param {string} date - '04-24' format MM-DD
   * @param {string} time - '21:15'
   */
  at = async ({ date, time }: { date: `${Month}:${DayOfMonth}`; time: `${Hours}:${Minutes}` }): Promise<string> => {
    let expression = '0 0 0 * * *';
    if (date) {
      const [month, day] = date.split(':');
      expression = this._handleMonth(expression, month as Month | MonthNum); // eslint-disable-line
      expression = this._handleDayOfMonth(expression, day as DayOfMonth); // eslint-disable-line
    }
    if (time) expression = this._handleTime(expression, time); // eslint-disable-line
    return this._convertToUtc(expression);
  };

  _handleDayOfMonth = (expression: string, dayOfMonth: DayOfMonth): string => {
    const [originalSeconds, originalMinutes, originalHours, _originalDayOfMonth, originalMonth, originalDayOfWeek] = expression.split(' ');
    return `${originalSeconds} ${originalMinutes} ${originalHours} ${dayOfMonth} ${originalMonth} ${originalDayOfWeek}`;
  };

  _handleTime = (expression: string, time: `${Hours}:${Minutes}`): string => {
    let hours;
    let minutes;
    if (time) [hours, minutes] = time.split(':');
    const [originalSeconds, originalMinutes, originalHours, originalDayOfMonth, originalMonth, originalDayOfWeek] = expression.split(' ');
    return `${originalSeconds} ${minutes || originalMinutes} ${hours || originalHours} ${originalDayOfMonth} ${originalMonth} ${originalDayOfWeek}`;
  };

  _handleDayOfWeek = (expression: string, dayOfWeek: keyof typeof WeekDay | DayOfWeek): string => {
    /**
     * Use our WeekDay enum to convert the day of the week to a number
     */
    if (dayOfWeek.length > 1) dayOfWeek = WeekDay[dayOfWeek.toLowerCase() as keyof typeof WeekDay]; // eslint-disable-line

    const [originalSeconds, originalMinutes, originalHours, originalDayOfMonth, originalMonth, _originalDayOfWeek] = expression.split(' ');
    return `${originalSeconds} ${originalMinutes} ${originalHours} ${originalDayOfMonth} ${originalMonth} ${dayOfWeek}`;
  };

  _handleMonth = (expression: string, month: keyof typeof Month | MonthNum): string => {
    /**
     * If the day of the month is less than 10, we need to add a 0 to the front
     */
    if (month.length > 2) month = Month[month.toLowerCase() as keyof typeof Month]; // eslint-disable-line

    const [originalSeconds, originalMinutes, originalHours, originalDayOfMonth, _originalMonth, originalDayOfWeek] = expression.split(' ');
    return `${originalSeconds} ${originalMinutes} ${originalHours} ${originalDayOfMonth} ${month} ${originalDayOfWeek}`;
  };

  _handleMonths = (expression: string, months: (keyof typeof Month)[] | MonthNum[]): string => {
    const monthsArray = [];
    for (const month of months) {
      /**
       * If the day of the month is less than 10, we need to add a 0 to the front
       */
      if (month.length > 2) monthsArray.push(Month[month.toLowerCase() as keyof typeof Month]); // eslint-disable-line
      else monthsArray.push(month as MonthNum); // eslint-disable-line
    }

    const [originalSeconds, originalMinutes, originalHours, originalDayOfMonth, _originalMonth, originalDayOfWeek] = expression.split(' ');
    return `${originalSeconds} ${originalMinutes} ${originalHours} ${originalDayOfMonth} ${monthsArray.join(',')} ${originalDayOfWeek}`;
  };

  _getOffset = async (): Promise<string> => {
    try {
      /**
       * We use the api so it can be dynamic specifically daylight savings time
       */
      let timezone = await fetch('https://worldtimeapi.org/api/timezone/America/New_York').then((res) => res.json());
      /**
       * Sometimes this api might go down (It's a free public api)
       * so we will default to -5 hours (America/New_York) during winter time (Not daylight savings time)
       */
      // TODO - Make my own api to get the offset so it's more reliable
      if (!timezone.utc_offset) return '5';

      /**
       * We need to convert the offset to a number and multiply it by -1
       * This is because the offset is in the format +5:00 or -5:00
       * In EST case, it's -5:00 meaning we are 5 hours BEHIND UTC meaning
       * we need to add 5 hours to the time to get UTC
       */
      return (+timezone.utc_offset.split(':')[0] * -1).toString();
    } catch (err) {
      return '5';
    }
  };

  _convertToUtc = async (expression: string): Promise<string> => {
    if (!expression || expression.split(' ').length !== 6) throw new Error('Invalid format provided');

    const offset = await this._getOffset();
    const [originalSeconds, originalMinutes, originalHours, originalDayOfMonth, originalMonth, originalDayOfWeek] = expression.split(' ');

    let hours = parseInt(originalHours) + parseInt(offset);
    if (hours > 23) hours = hours - 24; // We don't want to go over 24 hours
    if (hours < 0) hours = hours + 24; // We don't want to go under 0 hours
    return `${originalSeconds} ${originalMinutes} ${hours} ${originalDayOfMonth} ${originalMonth} ${originalDayOfWeek}`;
  };
}

export const repeat = Object.freeze(new CronHelper());
