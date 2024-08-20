import * as SQLite from 'expo-sqlite';


// Open the database
const dbPromise = SQLite.openDatabaseAsync('blessing.db');

// Create tables if they don't exist
export const createTables = async (): Promise<void> => {
  const db = await dbPromise;
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        country TEXT NOT NULL,
        subject TEXT NOT NULL,
        phone_number TEXT NOT NULL
      );`,
      [],
      (_, result) => {
        console.log('Table "contacts" created successfully');
      },
      (_, error) => {
        console.error('Error creating table "contacts"', error);
        return true; // Return true to rollback the transaction
      }
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS reportedScams (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        scamDate TEXT NOT NULL,
        userEmail TEXT NOT NULL,
        amountLost TEXT NOT NULL,
        platform TEXT NOT NULL
      );`,
      [],
      (_, result) => {
        console.log('Table "reportedScams" created successfully');
      },
      (_, error) => {
        console.error('Error creating table "reportedScams"', error);
        return true; // Return true to rollback the transaction
      }
    );
  });
};

// Insert a new contact
export const insertContact = async (firstName: string, lastName: string, country: string, subject: string, phone_number: string): Promise<void> => {
  const db = await dbPromise;
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO contacts (firstName, lastName, country, subject, phone_number) VALUES (?, ?, ?, ?, ?);',
      [firstName, lastName, country, subject, phone_number],
      (_, result) => {
        console.log('Contact inserted successfully');
      },
      (_, error) => {
        console.error('Error inserting contact', error);
        return true; // Return true to rollback the transaction
      }
    );
  });
};

// Fetch all contacts
export const getContacts = async (callback: (contacts: any[]) => void): Promise<void> => {
  const db = await dbPromise;
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM contacts;',
      [],
      (_, { rows }) => {
        callback(rows._array);
      },
      (_, error) => {
        console.error('Error fetching contacts', error);
        return true; // Return true to rollback the transaction
      }
    );
  });
};

// Update a contact
export const updateContact = async (id: number, firstName: string, lastName: string, country: string, subject: string, phone_number: string): Promise<void> => {
  const db = await dbPromise;
  db.transaction((tx) => {
    tx.executeSql(
      'UPDATE contacts SET firstName = ?, lastName = ?, country = ?, subject = ?, phone_number = ? WHERE id = ?;',
      [firstName, lastName, country, subject, phone_number, id],
      (_, result) => {
        console.log('Contact updated successfully');
      },
      (_, error) => {
        console.error('Error updating contact', error);
        return true; // Return true to rollback the transaction
      }
    );
  });
};

// Delete a contact
export const deleteContact = async (id: number): Promise<void> => {
  const db = await dbPromise;
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM contacts WHERE id = ?;',
      [id],
      (_, result) => {
        console.log('Contact deleted successfully');
      },
      (_, error) => {
        console.error('Error deleting contact', error);
        return true; // Return true to rollback the transaction
      }
    );
  });
};

// Insert a new scam report
export const insertScamReport = async (scamDate: string, userEmail: string, amountLost: string, platform: string): Promise<number> => {
  return new Promise<number>(async (resolve, reject) => {
    const db = await dbPromise;
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO reportedScams (scamDate, userEmail, amountLost, platform) VALUES (?, ?, ?, ?);',
        [scamDate, userEmail, amountLost, platform],
        (_, result) => {
          console.log('Scam report inserted successfully');
          resolve(result.insertId);
        },
        (_, error) => {
          console.error('Error inserting scam report', error);
          reject(error);
          return true; // Return true to rollback the transaction
        }
      );
    });
  });
};

// Fetch all reported scams
export const getReportedScams = async (): Promise<any[]> => {
  return new Promise<any[]>((resolve, reject) => {
    dbPromise.then((db: { transaction: (arg0: (tx: any) => void) => void; }) => {
      db.transaction((tx: { executeSql: (arg0: string, arg1: never[], arg2: (_: any, { rows }: { rows: any; }) => void, arg3: (_: any, error: any) => boolean) => void; }) => {
        tx.executeSql(
          'SELECT * FROM reportedScams;',
          [],
          (_: any, { rows }: any) => {
            resolve(rows._array);
          },
          (_: any, error: any) => {
            console.error('Error fetching reported scams', error);
            reject(error);
            return true; // Return true to rollback the transaction
          }
        );
      });
    }).catch((error: any) => {
      console.error('Failed to open database', error);
      reject(error);
    });
  });
};
