#!/usr/bin/python
# -*- coding: UTF-8 -*-

import unittest


def split_bill(price, discount, people):
    if discount == 0:
        pporpersona = list()
        for ite in people:
            var = ite*price
            pporpersona.append(var)
        return pporpersona
    elif discount >= 0:
        pporpersona = list()
        disprice = (price*discount)/100
        for ite in people:
            var = ite*disprice
            pporpersona.append(var)
        return pporpersona


def main(argv=None):
    if argv is None:
        argv = sys.argv
    try:
        try:
            opts, args = getopt.getopt(argv[1:], 'h', ['help'])
        except getopt.error, msg:
            raise Usage(msg)
       """ more code, unchanged
         print sum([.4, .5, .1]) == 1"""
        unittest.main()

    except Usage, err:
        print >> sys.stderr, err.msg
        print >> sys.stderr, 'for help use --help'
        return 2


if __name__ == '__main__':
    sys.exit(main())


