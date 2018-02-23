---
date: '2009-05-15 11:42:09'
layout: post
title: Connect to MySql using Java
description: A simple Java class useful to connect to a MySQL database
tags: [Tech,Java,Sql,Database]
---

This is a simple class that I usually use to connect to a MySQL database. Obviously the right [MySQL JDBC driver][1] must be in your classpath.

{% highlight java %}
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class ConnectionManager {

    // Connection data -- START

    static final String driver   = "com.mysql.jdbc.my_driver_version";
    static final String dbserver = "mysql.server.name";
    static final String dbport   = "mysql.database.port";
    static final String dbname   = "mysql.database.name";
    static final String dbuser   = "mysql.database.username";
    static final String dbpass   = "mysql.database.password";

    // Connection data -- END

    /**
     * Opens a connection to the database
     *
     * @return Returns a Connection object
     */

    public static Connection getConnection(){

        Connection con = null;

        try {

            Class.forName(driver).newInstance();
            String conString = "jdbc:mysql://"+dbserver+":"+dbport+"/"+dbname;
            con = DriverManager.getConnection(conString,dbuser, dbpass);

        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return con;
    }

    public static void close(Object object){

        if (object != null){

            try {

                if (object instanceof Connection)
                    ((Connection)object).close();
                else if (object instanceof Statement)
                    ((Statement)object).close();
                else if (object instanceof PreparedStatement)
                    ((PreparedStatement)object).close();
                else if (object instanceof ResultSet)
                    ((ResultSet)object).close();
            } catch (SQLException e) {
                e.printStackTrace();
            } finally {
                object = null;
            }
        }
    }
}
{% endhighlight %}

This is also a gist. <a href="https://gist.github.com/1387028">Check it out</a>

[1]: http://www.mysql.com/products/connector/j/

